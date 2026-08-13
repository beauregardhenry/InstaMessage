import React from 'react'
import { Plus, Send, Trash2, Edit2 } from 'lucide-react'

const TemplatesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Email Templates</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          New Template
        </button>
      </div>

      {/* Templates List */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Template {i} - {i === 1 ? 'Follow up' : i === 2 ? 'Meeting Request' : 'Out of Office'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Used 5 times
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    Last used: 2 days ago
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
                  <Send size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
                  <Edit2 size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplatesPage
