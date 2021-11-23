import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';

// TODO: type definition 다른 폴더로 빼기
declare global {
	interface Window {
		kakao: any;
	}
}

const Home = lazy(() => import('@routes/Home'));
const Login = lazy(() => import('@routes/Login'));
const Edit = lazy(() => import('@routes/Review/Edit'));

const App = (): JSX.Element => (
	<Router>
		{/* <Link to="/">메인</Link>
      <Link to="/login">로그인</Link> */}
		<Switch>
			<Suspense fallback={<div>loading...</div>}>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/Review/Edit" component={Edit} />
			</Suspense>
		</Switch>
	</Router>
);

export default hot(App);
