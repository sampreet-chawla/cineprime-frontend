import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { appContext } from './App.js';

function Nav(props) {
	const [click, setClick] = React.useState(false);
	const appCtx = React.useContext(appContext);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	const handleLoginFormClick = () => {
		props.setModalShow(true);
		closeBurger();
	};
	const handleLogoutClick = () => {
		appCtx.handleLogout();
		closeBurger();
	};

	// Display Watchlist link to signed-in user
	const watchlistJSX = appCtx.user ? (
		<li className='nav-item'>
			<Link to='/watchlist' className='nav-links' onClick={closeBurger}>
				Watchlist
			</Link>
		</li>
	) : (
		<></>
	);

	// Display Login page to visitor (user not available), and Logout link to signed-in user (user available)
	const signInJSX = appCtx.user ? (
		<li className='nav-item'>
			<Link to='/' className='nav-links' onClick={handleLogoutClick}>
				Logout
			</Link>
		</li>
	) : (
		<li className='nav-item'>
			<Link to='/' className='nav-links' onClick={handleLoginFormClick}>
				Sign Up/In
			</Link>
		</li>
	);

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
				{watchlistJSX}
				<li className='nav-item'>
					<Link to='/team' className='nav-links' onClick={closeBurger}>
						Team
					</Link>
				</li>
				{signInJSX}
			</ul>
		</nav>
	);
}

export default Nav;
