import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
	const { user, logout } = useContext(AuthContext);

	const navigate = useNavigate();

	const onSignOut = () => {
		logout().then(() => {
			navigate('/sign-in');
		});
	}

	const menuItems = <>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/about'>About</Link></li>
		<li><Link to='/services'>Services</Link></li>
		<li><Link to='/blog'>Blog</Link></li>
		<li><Link to='/contact'>Contact</Link></li>
		{user ? <>
			<li><Link to='/orders'>Orders</Link></li>
			<li><button onClick={onSignOut}>Sign Out</button></li>
		</> : <li><Link to='/sign-in'>Sign In</Link></li>}
	</>

	return <header className='my-12'>
		<div className='container navbar p-0'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
					</label>
					<ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						{menuItems}
					</ul>
				</div>

				<Link to='/' className='logo'><img src={logo} alt='Genius Car' /></Link>
			</div>

			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					{menuItems}
				</ul>
			</div>

			<div className='navbar-end'>
				<button className='btn alt'>Appointment</button>
			</div>
		</div>
	</header>
}
export default Header;