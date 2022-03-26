import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul className='gnb'>
				<li>
					<Link to='/gallery'>Gallery</Link>
				</li>
				<li>
					<Link to='/youtube'>Youtube</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
