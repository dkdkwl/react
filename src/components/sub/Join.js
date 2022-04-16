import Layout from '../common/Layout';
import { useEffect, useState } from 'react';

function Join() {
	const initVal = {
		userid: '',
		comments: '',
		email: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});

	const check = (arg) => {
		const errs = {};
		if (arg.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (arg.comments.length < 10) {
			errs.comments = '남기는말은 10글자 이상 입력하세요';
		}
		if (arg.email.length < 5 || !/@./.test(arg.email)) {
			errs.email = '이메일주소는 5글자이상 @ .을 포함해주세요.';
		}
		return errs;
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		console.log(err);
	}, [err]);

	return (
		<Layout name={'Join'}>
			<article>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>회원가입 폼 양식</legend>
						<table border='1'>
							<caption>회원가입</caption>
							<tbody>
								{/* userid */}
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
										<span className='err'>{err.userid}</span>
									</td>
								</tr>
								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-MAIL</label>
									</th>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='이메일을 입력하세요'
											value={val.email}
											onChange={handleChange}
										/>
										<span className='err'>{err.email}</span>
									</td>
								</tr>
								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='10'
											placeholder='남기는말을 입력하세요'
											value={val.comments}
											onChange={handleChange}></textarea>
										<span className='err'>{err.comments}</span>
									</td>
								</tr>
								{/* btnSet */}
								<tr>
									<th colSpan='2'>
										<input type='reset' value='cancel' onClick={handleReset} />
										<input type='submit' value='send' />
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</article>
		</Layout>
	);
}

export default Join;
