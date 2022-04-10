import React, { useEffect, useRef, useState } from 'react';

function Join() {
	const frame = useRef(null);

	//state로 관리할 초기 value
	const initVal = {
		userid: '',
	};

	//state에 초기value값 저장
	const [val, setVal] = useState(initVal);

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
												onChange={(e) => {
													const { name, value } = e.target;
													//console.log(`name: ${name}, vale:${value}`);
													//onChange발생시 기존 val state값을 현재 사용자가 입력하고 있는 값으로 갱신
													setVal({ ...val, [name]: value });

													//실제 변경된 state값이 input창에 출력
													console.log(val);
												}}
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
