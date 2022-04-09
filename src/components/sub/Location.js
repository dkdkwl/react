import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const frame = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);
	const path = process.env.PUBLIC_URL;

	//각 지점별 정보값
	const info = [
		{
			title: '본점',
			latlag: new kakao.maps.LatLng(33.450705, 126.570677),
			imgSrc: path + '/img/marker1.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '지점1',
			latlag: new kakao.maps.LatLng(33.450936, 126.569477),
			imgSrc: path + '/img/marker2.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '지점2',
			latlag: new kakao.maps.LatLng(33.450879, 126.56994),
			imgSrc: path + '/img/marker3.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	const [mapInfo, setMapInfo] = useState(info);

	useEffect(() => {
		frame.current.classList.add('on');

		const option = {
			center: mapInfo[0].latlag,
			level: 3,
		};

		//지도 인스턴스 생성해서 호출
		const mapInstance = new kakao.maps.Map(container.current, option);

		new kakao.maps.Marker({
			map: mapInstance, //위에 있는 인스턴스값을 그대로 활용
			position: mapInfo[0].latlag,
			title: mapInfo[0].title,
			image: new kakao.maps.MarkerImage(
				mapInfo[0].imgSrc,
				mapInfo[0].imgSize,
				mapInfo[0].imgPos
			),
		});

		//기존 지도인스턴스를
		setMap(mapInstance);
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
			</div>
		</section>
	);
}

export default Location;
