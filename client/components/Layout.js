import React from 'react'
import Narbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Narbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout