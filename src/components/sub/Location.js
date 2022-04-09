import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const frame = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);

	useEffect(() => {
		frame.current.classList.add('on');

		const options = {
			center: new kakao.maps.LatLng(37.51270099322895, 127.06067154788254),
			level: 3,
		};

		const mapInfo = new kakao.maps.Map(container.current, options);
		setMap(mapInfo);

		const markerPosition = new kakao.maps.LatLng(
			37.51270099322895,
			127.06067154788254
		);

		// 마커를 생성합니다
		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(mapInfo);
	}, []);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};

	useEffect(() => {
		console.log(traffic);
		handleTraffic();
	}, [traffic]);

	return (
		<section className='location' ref={frame}>
			<div className='inner'>
				<h1>Location</h1>

				<div id='map' ref={container}></div>

				<button onClick={() => setTraffic(!traffic)}>
					{traffic ? 'traffic ON' : 'traffic OFF'}
				</button>
			</div>
		</section>
	);
}

export default Location;
