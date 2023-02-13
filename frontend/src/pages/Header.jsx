import React from 'react'

export default function Header() {
  return (
    <header className='mb-2'>
        <div className="navbar bg-secondary text-secondary-content">
            <div className='flex-1'>
                <a className='btn btn-ghost'>Note App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Create Note</a></li>
                    <li><a>Log in</a></li>
                    <li><a>Log out</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
