import {Link} from 'react-router-dom'
import {NavHeader, NavLogo} from './style'

const Header = () => (
  <NavHeader>
    <Link to="/">
      <NavLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavHeader>
)

export default Header
