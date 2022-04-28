import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/main/Main';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Department from './components/sub/Department';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Community from './components/sub/Community';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main}></Route>

				<Route path='/'>
					<Header type={'sub'} />222
				</Route>
			</Switch>

			<Route path='/department' component={Department}></Route>
			<Route path='/community' component={Community}></Route>
			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>
			<Route path='/location' component={Location}></Route>
			<Route path='/join' component={Join}></Route>

			<Footer />
		</>
	);
}

export default App;
