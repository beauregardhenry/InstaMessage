import React from 'react'
import { Bell, Lock, Mail, Trash2, Save } from 'lucide-react'
import toast from 'react-hot-toast'

const SettingsPage = () => {
  const [settings, setSettings] = React.useState({
    emailNotifications: true,
    autoSync: true,
    syncInterval: 3600,
    darkMode: false,
  })

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      {/* Email Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Mail size={24} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Email Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Auto-sync Emails</p>
              <p className="text-sm text-gray-600">
                Automatically sync emails from your Gmail account
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.autoSync}
              onChange={(e) =>
                setSettings({ ...settings, autoSync: e.target.checked })
              }
              className="w-5 h-5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sync Interval (seconds)
            </label>
            <input
              type="number"
              value={settings.syncInterval}
              onChange={(e) =>
                setSettings({ ...settings, syncInterval: parseInt(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Bell size={24} className="text-yellow-600" />
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">
                Receive notifications for new emails
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) =>
                setSettings({ ...settings, emailNotifications: e.target.checked })
              }
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-lg shadow p-6 border border-red-200">
        <div className="flex items-center gap-2 mb-6">
          <Trash2 size={24} className="text-red-600" />
          <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Delete All Data
        </button>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex gap-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Save size={20} />
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
