import React, { useEffect, useRef } from 'react';

function Join() {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className='join' ref={frame}>
			<div className='inner'>
				<h1>Membership</h1>
			</div>
		</section>
	);
}

export default Join;
