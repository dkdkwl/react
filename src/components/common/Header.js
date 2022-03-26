import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const active = { color: 'aqua' };
	return (
		<header>
			<h1>
				<NavLink activeStyle={active} exact to='/'>
					LOGO
				</NavLink>
			</h1>

			<ul className='gnb'>
				<li>
					<NavLink activeStyle={active} to='/gallery'>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={active} to='/youtube'>
						Youtube
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
