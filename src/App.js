import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Visual from './components/main/Visual';
import Content from './components/main/Content';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
				<Content />
			</Route>

			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>

			<Footer />
		</>
	);
}

export default App;
