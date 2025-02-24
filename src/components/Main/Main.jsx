import React from 'react'
import './main.css'
import PageTitle from '../PageTitle/PageTitle'
import Dashboard from '../Dashboard/Dashboard'

function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle page='Dashboard' />
        <Dashboard />
    </main>
  )
}

export default Main