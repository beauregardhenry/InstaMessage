import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      set({ isAuthenticated: true, user: data.user, token: data.token })
      localStorage.setItem('authToken', data.token)
      return data
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  },

  logout: () => {
    set({ isAuthenticated: false, user: null, token: null })
    localStorage.removeItem('authToken')
  },

  loadUser: async () => {
    const token = localStorage.getItem('authToken')
    if (token) {
      try {
        const response = await fetch('/api/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` },
        })
        const data = await response.json()
        set({ isAuthenticated: true, user: data, token })
      } catch (error) {
        console.error('Failed to load user:', error)
        localStorage.removeItem('authToken')
      }
    }
  },
}))
