import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window;
	const path = process.env.PUBLIC_URL;
	const info = [
		{
			title: '송내역',
			latlag: new kakao.maps.LatLng(37.487626, 126.753045),
			imgSrc: path + '/img/marker1.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '강남 포스코',
			latlag: new kakao.maps.LatLng(37.506354, 127.055006),
			imgSrc: path + '/img/marker2.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '청담역',
			latlag: new kakao.maps.LatLng(37.51912, 127.051937),
			imgSrc: path + '/img/marker3.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	const frame = useRef(null);
	const container = useRef(null);

	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);
	const [index, setIndex] = useState(0);
	const [mapInfo] = useState(info);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	useEffect(() => {
		//index state가 변경될때마다 #map안쪽에 계속해서 지도 인스턴스를 생성하면서 태그가 중첩되는 문제
		//해결방법 - 기존 #map안쪽의 DOM을 제거해서 초기화하고 다시 지도 생성
		container.current.innerHTML = '';

		const option = {
			center: mapInfo[index].latlag,
			level: 3,
		};
		const mapInstance = new kakao.maps.Map(container.current, option);

		new kakao.maps.Marker({
			map: mapInstance,
			position: mapInfo[index].latlag,
			title: mapInfo[index].title,
			image: new kakao.maps.MarkerImage(
				mapInfo[index].imgSrc,
				mapInfo[index].imgSize,
				mapInfo[index].imgPos
			),
		});

		const mapInit = () => {
			console.log('mapInit');
			mapInstance.setCenter(mapInfo[index].latlag);
		};

		window.addEventListener('resize', mapInit);
		setMap(mapInstance);

		return () => window.removeEventListener('resize', mapInit);
	}, [index]);

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

				<ul>
					{mapInfo.map((data, idx) => {
						return (
							<li key={idx} onClick={() => setIndex(idx)}>
								{data.title}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Location;
