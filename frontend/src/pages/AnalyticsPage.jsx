import React from 'react'
import { Download, TrendingUp, Users, Clock } from 'lucide-react'

const AnalyticsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download size={20} />
          Export
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Avg Response Time', value: '2.5h', icon: Clock },
          { label: 'Emails Sent', value: '0', icon: TrendingUp },
          { label: 'Top Sender', value: '-', icon: Users },
          { label: 'This Month', value: '0', icon: TrendingUp },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <Icon className="text-blue-500" size={28} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Emails by Sender
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-600">
            Chart will render here
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Email Activity Timeline
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-600">
            Chart will render here
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Emails by Category
        </h2>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-600">
          Chart will render here
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
