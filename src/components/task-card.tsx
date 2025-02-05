"use client"
import React, { useState } from 'react'

export default function TaskCard() {
  const [status, setStatus] = useState(false);
  return (
    <div className="bg-secondary p-4 w-full rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Task Title</h3>
        <p className="text-gray-600 mb-2 truncate">Task description goes here...</p>
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Due: {new Date().toLocaleDateString()}</span>
            <button
                className={`px-3 py-1 rounded-full text-white ${status ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => setStatus(!status)}
                >
                {status ? 'Complete' : 'Incomplete'}
            </button>
        </div>
    </div>
  )
}
