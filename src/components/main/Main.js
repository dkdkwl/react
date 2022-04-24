import React, { useEffect, useRef } from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

function Main() {
	const main = useRef(null);

	//각 섹션의 세로 위치값 반환함수
	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		const pos = [];
		for (const sec of secs) pos.push(sec.offsetTop);
		console.log(pos);
	};

	useEffect(() => {
		//첨  로딩시 세로 위치값 반환
		getPos();

		//브라우저 리사이즈시 갱신된 세로 위치값 반환
		window.addEventListener('resize', getPos);

		//해당 컴포넌트가 unmount시 window 전역에 등록된 getPos함수 제거
		return () => window.removeEventListener('resize', getPos);
	}, []);

	return (
		<>
			<main ref={main}>
				<Header type={'main'} />
				<Visual />
				<News />
				<Pics />
				<Vids />
				<Btns />
			</main>
		</>
	);
}

export default Main;
