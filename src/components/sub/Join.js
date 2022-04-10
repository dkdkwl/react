import React, { useEffect, useRef, useState } from 'react';

function Join() {
	const frame = useRef(null);

	//state로 관리할 초기 value
	const initVal = {
		userid: '',
	};

	//state에 초기value값 저장
	const [val, setVal] = useState(initVal);

	//input상태값이 변경될때마다 실행할 함수
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
		console.log(val);
	};

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className='join' ref={frame}>
			<div className='inner'>
				<h1>Membership</h1>
				<article>
					<form action=''>
						<fieldset>
							<legend>회원가입 폼 양식</legend>
							<table border='1'>
								<caption>회원가입</caption>
								<tbody>
									<tr>
										<th scope='row'>
											<label htmlFor='userid'>USER ID</label>
										</th>
										<td>
											<input
												type='text'
												id='userid'
												name='userid'
												placeholder='아이디를 입력하세요'
												value={val.userid}
												onChange={handleChange}
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</article>
			</div>
		</section>
	);
}

export default Join;
