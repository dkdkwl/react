import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);

	const dummyPosts = [
		{ title: 'Hello6', content: 'Here comes description in detail.' },
		{ title: 'Hello5', content: 'Here comes description in detail.' },
		{ title: 'Hello4', content: 'Here comes description in detail.' },
		{ title: 'Hello3', content: 'Here comes description in detail.' },
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	const [posts, setPosts] = useState(dummyPosts);

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

	//수정모드 변경함수
	const enableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	useEffect(() => {
		console.log(posts);
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
								//반복도는 해당 포스트의 enableUpdate값이 true면 수정모드
								<>
									<input type='text' defaultValue={post.title} />
									<br />
									<textarea defaultValue={post.content}></textarea>
									<br />

									<button>cancel</button>
									<button>save</button>
								</>
							) : (
								//반복도는 해당 포스트의 enableUpdate값이 false면 출력
								<>
									<h2>{post.title}</h2>
									<p>{post.content}</p>

									<button onClick={() => enableUpdate(idx)}>edit</button>
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
