import React, { useState } from 'react';

function Department() {
	let [index, setIndex] = useState(0);

	return (
		<section className='department'>
			<h1>Department</h1>

			<button className='plus' onClick={() => setIndex(++index)}>
				더하기
			</button>
			<button className='minus' onClick={() => setIndex(--index)}>
				빼기
			</button>
			<h3>{index}</h3>
		</section>
	);
}

export default Department;
