import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<nav className='navbar'>
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<Link to='/'>
				<img className='header-logo' src='./cine-logo.png' alt='cineprime' />
			</Link>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeBurger}>
						Browse
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/watchlist' className='nav-links' onClick={closeBurger}>
						Watchlist
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/team' className='nav-links' onClick={closeBurger}>
						Team
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeBurger}>
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
