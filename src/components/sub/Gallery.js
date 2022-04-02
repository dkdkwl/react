import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';

function Gallery() {
	const frame = useRef(null);
	const [items, setItems] = useState([]);
	const [isPop, setIsPop] = useState(false);

	const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
	const method = 'flickr.interestingness.getList';
	const per_page = 3;
	const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${per_page}`;

	useEffect(() => {
		frame.current.classList.add('on');

		axios
			.get(url)
			.then((json) => {
				console.log(json.data.photos.photo);
				setItems(json.data.photos.photo);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<section className='gallery' ref={frame}>
				<div className='inner'>
					<h1>Gallery</h1>
					<ul>
						{items.map((item, idx) => {
							return (
								<li key={idx} onClick={() => setIsPop(true)}>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
									/>
									<h2>{item.title}</h2>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			{/* isPop이 ture일때 팝업출력 */}
			{isPop ? <Popup /> : null}
		</>
	);

	function Popup() {
		return (
			<aside className='popup'>
				<span>close</span>
			</aside>
		);
	}
}

export default Gallery;
