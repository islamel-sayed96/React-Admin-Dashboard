import React from 'react'
import './nav.css'
import NavNotice from '../NavNotice/NavNotice'
import NavMessage from '../NavMessage/NavMessage'
import NavAvatar from '../NavAvatar/NavAvatar'

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-align-items-center'>
            <NavNotice />
            <NavMessage />
            <NavAvatar />
        </ul>
    </nav>
  )
}

export default Nav