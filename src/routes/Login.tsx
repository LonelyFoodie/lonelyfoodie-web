import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Login = () => {
	const handleClick = () => console.log('HELLO WORLD!');

	return (
		<>
			<StyledWrapper>
				<StyledInnerWrapper>
					<TitleWrapper>
						<StyledIcon />
						<Title>고독한 시식가 로그인하기</Title>
					</TitleWrapper>
					<Typography>서울시립대 근처 맛집을 찾아보세요</Typography>
					<ButtonWrapper>
						<StyledButton>카카오로 로그인하기</StyledButton>
						<LinkWrapper>
							계정이 없다면&nbsp;
							<StyledLink to="/signup">회원가입하세요</StyledLink>
						</LinkWrapper>
					</ButtonWrapper>
				</StyledInnerWrapper>
			</StyledWrapper>
		</>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1,
});

const StyledInnerWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '700px',
});

const TitleWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
});

const StyledIcon = styled(RestaurantIcon)({
	color: '#F55919',
	fontSize: 50,
	marginRight: 10,
});

const Title = styled('h1')({
	fontSize: '40px',
	fontWeight: 'bold',
	margin: 0,
});

const Typography = styled('h2')({
	fontWeight: 'lighter',
	marginTop: 5,
});

const ButtonWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '70px 0px',
});

const StyledButton = styled('button')({
	padding: '20px 0px',
	width: '400px',
	borderRadius: '10px',
	fontSize: '25px',
	fontWeight: 'bold',
	backgroundColor: '#FEE500',
});

const LinkWrapper = styled('div')({
	display: 'flex',
	marginTop: 10,
});

const StyledLink = styled(Link)({
	textDecoration: 'underline',
});

export default Login;
