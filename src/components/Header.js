import React from 'react';
import Nav from './Nav';
import './Header.css';

function Header(props) {
	return (
		<div className='Header'>
			<Nav setModalShow={props.setModalShow} />
		</div>
	);
}

export default Header;
