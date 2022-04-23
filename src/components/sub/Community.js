import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	/*
	const dummyPosts = [
		{ title: 'Hello6', content: 'Here comes description in detail.' },
		{ title: 'Hello5', content: 'Here comes description in detail.' },
		{ title: 'Hello4', content: 'Here comes description in detail.' },
		{ title: 'Hello3', content: 'Here comes description in detail.' },
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	*/
	//기존 로컬저장소의 문자값을 가져와서 파싱한다음 해당 데이터 반환
	const getLocalData = () => {
		const data = localStorage.getItem('posts');
		return JSON.parse(data);
	};

	//처음 컴포넌트가 실행되자마자 로컬저장소로부터 반환된 값으로 posts값 초기화
	const [posts, setPosts] = useState(getLocalData);
	const [allowed, setAllowed] = useState(true);

	//localStorage의 데이터를 반환하는 함수

	const resetPosts = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPosts = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();
		resetPosts();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요');
			return;
		}

		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
	};

	const deleletPosts = (idx) => {
		setPosts(posts.filter((_, index) => index !== idx));
	};

	const enableUpdate = (index) => {
		setAllowed(false);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const diableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			alert('수정할 제목과 본문을 입력하세요.');
			return;
		}
		setAllowed(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		//posts값이 변경될때마다 해당 state를 문자열로 변환해서 로컬저장소에 저장
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='10'
					placeholder='본문을 입력하세요'
					ref={textarea}></textarea>
				<br />
				<button onClick={resetPosts}>cancel</button>
				<button onClick={createPosts}>create</button>
			</div>

			<div className='showBox'>
				{posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								<>
									<input
										type='text'
										defaultValue={post.title}
										ref={editInput}
									/>
									<br />
									<textarea
										defaultValue={post.content}
										ref={editTextarea}></textarea>
									<br />

									<button onClick={() => diableUpdate(idx)}>cancel</button>
									<button onClick={() => updatePost(idx)}>save</button>
								</>
							) : (
								<>
									<h2>{post.title}</h2>
									<p>{post.content}</p>

									<button
										onClick={() => {
											if (allowed) enableUpdate(idx);
										}}>
										edit
									</button>
									<button onClick={() => deleletPosts(idx)}>delete</button>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
