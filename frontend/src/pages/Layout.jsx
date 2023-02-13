import React from 'react'
import Header from './Header'
import Notes from './Notes'

export default function Layout({children}) {
  return (
    <div>
        {/* Header */}
        <Header />
        <div>
            {children}  
        </div>
        
    </div>
  )
}
