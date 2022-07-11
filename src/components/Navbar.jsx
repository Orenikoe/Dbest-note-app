import { NavLink } from 'react-router-dom';
import  Logout  from './Logout/Logout'

function Navbar() {
	const NavbarStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
		};
	};
	return (
		<>
		<nav>
			<NavLink to="/home" style={NavbarStyles}>
				Home
			</NavLink>
			<NavLink to="/notes" style={NavbarStyles}>
				Notes
			</NavLink>
			<NavLink to="/contact" style={NavbarStyles}>
				Contact
			</NavLink>
			{/* <NavLink to="/" style={NavbarStyles}>
				Login
			</NavLink> */}
		</nav>
		<Logout />
		</>
	);
}

export default Navbar;
