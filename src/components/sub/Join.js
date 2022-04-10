import React, { useEffect, useRef, useState } from 'react';

function Join() {
	const frame = useRef(null);

	const initVal = {
		userid: '',
	};

	const [val, setVal] = useState(initVal);
	//input요소의 인증 실패시 출력될 에러메세지를 담을 state생성
	const [err, setErr] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	//에러메세지 객체를 반환하는 함수
	const check = (val) => {
		let errs = {};
		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		return errs;
	};

	//전송이벤트 발생시 호출될 함수
	const handleSubmit = (e) => {
		e.preventDefault();

		//전송이벤트 발생시 현재 val state값의 userid값을
		//check함수가 검사해서 인증통과하면 빈객체반환
		//인증실패하면 userid키값으로 에러메세지 담아서 에러객체반환
		//반환된 에러객체를 err state에 저장
		setErr(check(val));
	};

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className='join' ref={frame}>
			<div className='inner'>
				<h1>Membership</h1>
				<article>
					<form onSubmit={handleSubmit}>
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
									<tr>
										<th colSpan='2'>
											<input type='reset' value='cancel' />
											<input type='submit' value='send' />
										</th>
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
