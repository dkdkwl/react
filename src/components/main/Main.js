import React, { useEffect, useRef } from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

function Main() {
	console.log('main');
	const main = useRef(null);
	const pos = useRef([]);
	//useRef는 가상돔을 참조할때도 쓰이지만
	//특정 값을 컴포넌트가 재 랜더링되더라도 값을 유지시켜야 될때
	//특정 값이 변경이 되더라도 컴포넌트를 다시 재 랜더링 시키면 안될때

	//각 섹션의 세로 위치값 반환함수
	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
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
