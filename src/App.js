import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Visual from './components/main/Visual';
import Content from './components/main/Content';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Department from './components/sub/Department.js';

import './scss/style.scss';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
				<Content />
			</Route>

			<Route path='/department' component={Department}></Route>
			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>

			<Footer />
		</>
	);
}

export default App;
