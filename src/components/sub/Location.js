import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const frame = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);
	const path = process.env.PUBLIC_URL;

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

		//마커이미지 정보 추가
		const imageSrc = `${path}/img/marker1.png`;
		const imageSize = new kakao.maps.Size(232, 99);
		const imageOption = { offset: new kakao.maps.Point(110, 90) };

		//마커 인스턴스 생성
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
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

	const setCenter = (lat, lng) => {
		const moveLatLon = new kakao.maps.LatLng(lat, lng);
		map.setCenter(moveLatLon);
	};

	useEffect(() => {
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

				<ul className='branch'>
					<li onClick={() => setCenter(37.51270099322895, 127.06067154788254)}>
						본점
					</li>
					<li onClick={() => setCenter(37.487626, 126.753045)}>지점1</li>
				</ul>
			</div>
		</section>
	);
}

export default Location;
