import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className='location' ref={frame}>
			<div className='inner'>
				<h1>Location</h1>
			</div>
		</section>
	);
}

export default Location;
