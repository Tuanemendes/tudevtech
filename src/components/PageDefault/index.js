import React from 'react'
import Banner from '../Banner'
import { Outlet } from 'react-router-dom'

const PageDefault = () => {
  return (
    <main>
        <Banner/>
        <Outlet/>
    </main>
  )
}

export default PageDefault
