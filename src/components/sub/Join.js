import Layout from '../common/Layout';
import { useEffect, useState } from 'react';

function Join() {
	const initVal = {
		userid: '',
		comments: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};
	
	const check = (arg) => {
		const errs = {};	
		if (arg.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if(arg.comments.length < 10){
			errs.comments = '남기는말은 10글자 이상 입력하세요';
		}
		return errs;
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
											onChange={handleChange}
										></textarea>
										<span className="err">{err.comments}</span>
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
		</Layout>
	);
}

export default Join;
