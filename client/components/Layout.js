import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout