import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function Department() {
	let [index, setIndex] = useState(0);
	const frame = useRef(null);
	//추후 axios로 불러온 데이터 배열을 담을 state생성
	const [members, setMembers] = useState([]);
	//public폴더의 절대 경로값을 구할
	const path = process.env.PUBLIC_URL;
	//절대경로에서부터의 json파일 데이터 url값 구함
	const url = `${path}/DB/department.json`;

	useEffect(() => {
		frame.current.classList.add('on');

		//axios로 위에 만든 url로 데이터 요청후
		//요청이 성공하면 state값을 옮겨담음
		axios
			.get(url)
			.then((json) => {
				console.log(json.data.data);
				setMembers(json.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className='department' ref={frame}>
			<div className='inner'>
				<h1>Department</h1>

				{/* state에 있는 배열값을 반복돌면서 가상DOM 생성 */}
				<ul>
					{members.map((data, idx) => {
						return (
							<li key={idx}>
								<img src={`${path}/img/${data.pic}`} />
								<h2>{data.name}</h2>
								<p>{data.position}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Department;
