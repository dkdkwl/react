import React, { useRef, useEffect, useState } from 'react';

function Location() {
	const frame = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);

	useEffect(() => {
		frame.current.classList.add('on');

		const options = {
			center: new kakao.maps.LatLng(37.512908, 127.0595845),
			level: 3,
		};

		const mapInfo = new kakao.maps.Map(container.current, options);
		//지역변수 map의 인스턴스 정보값을 setMap을 통해서 state map으로 옮겨담음
		setMap(mapInfo);
	}, []);

	return (
		<section className='location' ref={frame}>
			<div className='inner'>
				<h1>Location</h1>

				<div id='map' ref={container}></div>

				{/* 교통량 보기 버튼 클릭시 state에 등록이 되어 있는 맵 인스턴스에서 프로토타입 메서드 호출 */}
				<button
					onClick={() => map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)}>
					Traffic On
				</button>
				{/* 교통량 숨기기 버튼 클릭시 state에 등록이 되어 있는 맵 인스턴스에서 프로토타입 메서드 호출 */}
				<button
					onClick={() =>
						map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
					}>
					Traffic Off
				</button>
			</div>
		</section>
	);
}

export default Location;
