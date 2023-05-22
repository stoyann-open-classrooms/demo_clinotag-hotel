import './header.css'
import logo from '../../../assets/logo/logo_hotel.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
       <Link to={'/'}>  <img className="" src={logo} alt="" /> </Link>
      </div>
      <ul className="navbar-list">
        <li>Destination</li>
        <li>Offers</li>
        <li>Loyalty</li>
        <li>Sustainability</li>
        <li>Spa & Wellness</li>
        <li>Contact us</li>
      </ul>
    </header>
  )
}

export default Header
