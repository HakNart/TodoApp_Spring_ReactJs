import React from 'react'

import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className='app-area p-7'>
        {children}
      </div>

    </div>
  )
}


