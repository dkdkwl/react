import React, { useRef, useEffect } from 'react';
import axios from 'axios';

function Youtube() {
	const frame = useRef(null);
	const api_key = 'AIzaSyCCiJkX1nNqYL222H5m-0fCS65LfzyExlQ';
	const play_list = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&playlistId=${play_list}&maxResults=3&part=snippet`;

	useEffect(() => {
		frame.current.classList.add('on');

		axios.get(url).then((json) => {
			console.log(json);
		});
	}, []);

	return (
		<section className='gallery' ref={frame}>
			<div className='inner'>
				<h1>Youtube</h1>
			</div>
		</section>
	);
}

export default Youtube;
