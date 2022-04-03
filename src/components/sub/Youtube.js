import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

function Youtube() {
	const frame = useRef(null);
	const [items, setItems] = useState([]);
	const [isPop, setIsPop] = useState(false);
	const [index, setIndex] = useState(0);

	const api_key = 'AIzaSyCCiJkX1nNqYL222H5m-0fCS65LfzyExlQ';
	const play_list = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&playlistId=${play_list}&maxResults=3&part=snippet`;

	useEffect(() => {
		frame.current.classList.add('on');

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<section className='youtube' ref={frame}>
				<div className='inner'>
					<h1>Youtube</h1>
					{items.map((item, idx) => {
						let desc = item.snippet.description;
						let desc_len = desc.length;
						let date = item.snippet.publishedAt;

						return (
							<article
								key={idx}
								onClick={() => {
									setIsPop(!isPop);
								}}>
								<div className='inner'>
									<div className='pic'>
										<img src={item.snippet.thumbnails.medium.url} />
									</div>
									<h2>{item.snippet.title}</h2>
									<p>{desc_len > 200 ? desc.substr(0, 200) + '...' : desc}</p>
									<span>{date.split('T')[0]}</span>
								</div>
							</article>
						);
					})}
				</div>
			</section>

			{isPop ? <Popup /> : null}
		</>
	);

	function Popup() {
		useEffect(() => {
			console.log('pop');
			document.body.style.overflow = 'hidden';

			return () => {
				document.body.style.overflow = 'auto';
			};
		}, []);

		return (
			<aside className='popup'>
				<span onClick={() => setIsPop(!isPop)}>close</span>
			</aside>
		);
	}
}

export default Youtube;
