import Layout from '../common/Layout';
import {useEffect, useState} from 'react'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

function Join() {
	const initVal = {
		userid: '',
	}
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});

	const handleChange = e =>{
		const {name, value} = e.target;													
		setVal({...val, [name]: value})
	}

	//인수로 현재 val의 정보값을 전달
	const check = (arg) => {
		const errs = {};
		//입력된 아이디값이 5글자 이하면 에레메세지를 담아서 객체리턴
		//입력된 아이디값이 5글자 이상이면 빈 에러객체를 리턴
		if(arg.userid.length < 5){
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		return errs;
	}

	const handleSubmit = e => {
		e.preventDefault();
		//전송 이벤트 발생시
		//check함수로 반환된 에러객체가 err 스테이트에 저장	
		setErr(check(val));
	}

	
	useEffect(()=>{
		console.log(err);
	},[err]);

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
											<span className="err">{err.userid}</span>
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
