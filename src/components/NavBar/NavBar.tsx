import { NavLink } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/" end className="button">
        Home
      </NavLink>
      <NavLink to="/vision-board" className="button">
        Vision Board
      </NavLink>
      <NavLink to="/splash" className="button">
        Splash
      </NavLink>
    </nav>
  )
}
