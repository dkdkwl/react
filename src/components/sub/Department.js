import React, { useState, useEffect, useRef } from 'react';

function Department() {
	let [index, setIndex] = useState(0);
	const frame = useRef(null);

	useEffect(() => {
		console.log('컴포넌트 생성');
		frame.current.classList.add('on');

		return () => {
			console.log('컴포넌트 소멸');
		};
	}, []);

	useEffect(() => {
		console.log('index값 변경');
	}, [index]);

	return (
		<section className='department' ref={frame}>
			<div className='inner'>
				<h1>Department</h1>

				<button className='plus' onClick={() => setIndex(++index)}>
					더하기
				</button>
				<button className='minus' onClick={() => setIndex(--index)}>
					빼기
				</button>
				<h3>{index}</h3>
			</div>
		</section>
	);
}

export default Department;
