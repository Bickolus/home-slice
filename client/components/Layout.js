import React from 'react'
import Narbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Narbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout