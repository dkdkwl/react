import Layout from '../common/Layout';
import {useState} from 'react'

function Join() {
	const initVal = {
		userid: '',
	}
	const [val, setVal] = useState(initVal);

	const handleChange = e =>{
		const {name, value} = e.target;													
		setVal({...val, [name]: value})
	}

	return (
			
			<Layout name={'Join'}>
				<article>
					<form>
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
			</Layout>		
	);
}

export default Join;
