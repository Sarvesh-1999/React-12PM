import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
        <Nav/>
        {/* Outlet is used to render children routes component */}
        <Outlet/>
    </div>
  )
}

export default Layout