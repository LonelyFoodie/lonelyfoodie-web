import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import GlobalStyle from '@components/GlobalStyle';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Loading from '@loading/Loading';
import IconLink from '@common/iconLink';
import Sidebar from '@common/sidebar';
import Auth from '@auth/Auth';

const Home = lazy(() => import('@home/Home'));
const Login = lazy(() => import('@login/Login'));
const Mypage = lazy(() => import('@mypage/Mypage'));
const MyPageEdit = lazy(() => import('@components/mypageEdit/MyPageEdit'));
const Withdraw = lazy(() => import('@withdraw/Withdraw'));
const Edit = lazy(() => import('@edit/Edit'));

const App = (): JSX.Element => (
	<Router>
		<GlobalStyle />
		<Wrapper>
			<Sidebar>
				<IconLink to="/" icon={<HomeIcon fontSize="large" />} />
				<IconLink
					to="/mypage"
					icon={<AccountCircleIcon fontSize="large" />}
				/>
			</Sidebar>
			<Switch>
				<RecoilRoot>
					<Suspense fallback={<Loading />}>
						<Route path="/" exact component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/edit" component={Edit} />
						<Route path="/mypage" exact component={Mypage} />
						<Route path="/mypage/edit" component={MyPageEdit} />
						<Route path="/mypage/withdraw" component={Withdraw} />

						<Route path="/oauth" component={Auth} />
					</Suspense>
				</RecoilRoot>
			</Switch>
		</Wrapper>
	</Router>
);

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	height: '100%',
});

export default hot(App);
