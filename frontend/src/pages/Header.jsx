import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthContext';

export default function Header() {
    const navigate = useNavigate();
    const authContext = useAuth();

  return (
    <header>
        <div className="navbar bg-secondary text-secondary-content">
            <div className='flex-1'>
                <a className='btn btn-ghost' onClick={()=>navigate(`/welcome/${authContext.username}`)}>Note App</a>
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
