import React, { useRef, useEffect } from 'react';

function Gallery() {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className='gallery' ref={frame}>
			<div className='inner'>
				<h1>Gallery</h1>
			</div>
		</section>
	);
}

export default Gallery;
