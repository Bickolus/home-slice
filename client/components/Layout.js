import React from 'react'
import Narbar from './Narbar'

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