import React from 'react'
import { BarChart3, Mail, Inbox, Archive } from 'lucide-react'

const DashboardPage = () => {
  const stats = [
    { label: 'Total Emails', value: '0', icon: Mail },
    { label: 'Unread', value: '0', icon: Inbox },
    { label: 'Archived', value: '0', icon: Archive },
    { label: 'This Week', value: '0', icon: BarChart3 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <Icon className="text-blue-500" size={32} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <p className="text-gray-600">
          Your email activity will appear here once you've connected your Gmail account.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Connect Gmail Account
        </button>
      </div>
    </div>
  )
}

export default DashboardPage
