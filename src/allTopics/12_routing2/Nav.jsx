import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div>
        <li> 
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/contacts">Contacts</Link>
        </li>
        <hr />
    </div>
  )
}

export default Nav