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
			center: new kakao.maps.LatLng(37.512908, 127.0595845),
			level: 3,
		};

		const mapInfo = new kakao.maps.Map(container.current, options);
		setMap(mapInfo);
	}, []);

	const handleTraffic = () => {
		//첨에 컴포넌트가 생성시에는 아직 map state값이 비어있는 상태이기 때문에 map값을 읽을수 없어서 오류가 뜸
		//그래서 추후 traffic state값이 변경이 되고 그때 map값이 생성되면 동작이 되도록
		//아래 삼항 연산자를 map값이 있을떄에만 실행하도록 조건문 처리
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

				<button onClick={() => setTraffic(!traffic)}>traffic</button>
			</div>
		</section>
	);
}

export default Location;
