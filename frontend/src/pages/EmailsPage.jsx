import React from 'react'
import { Mail, Search, Trash2, Archive } from 'lucide-react'

const EmailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Emails</h1>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Refresh
          </button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Filter
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center bg-white rounded-lg shadow px-4 py-3">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search emails..."
            className="ml-3 flex-1 outline-none"
          />
        </div>
      </div>

      {/* Email List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-4"
            >
              <input type="checkbox" className="w-4 h-4" />
              <Mail className="text-blue-500 flex-shrink-0" size={20} />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">
                  Email Subject {i}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  Preview of the email content goes here...
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-sm text-gray-600">Today</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="mt-6 flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Archive size={18} />
          Archive
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  )
}

export default EmailsPage
