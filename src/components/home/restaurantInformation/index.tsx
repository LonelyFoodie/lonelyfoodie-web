import React, { useState } from 'react';
import styled from 'styled-components';
import RoomIcon from '@mui/icons-material/Room';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Restaurant } from '@library/map/types';
import Tabs from '@home/tabs';
import Tab from '@home/tab';
import TabPanel from '@home/tabPanel';
import IconItem from '@home/restaurantInformation/iconItem';
import RestaurantRiviewItem from '@home/restaurantReviewItem';
import { Link } from 'react-router-dom';

interface RestaurantInformationProps {
	restaurant: Restaurant;
	onGoBackClick: () => void;
}
const RestaurantInformation = ({
	restaurant,
	onGoBackClick,
}: RestaurantInformationProps) => {
	const { placeName, roadAddressName, phone, star, review, color } =
		restaurant;
	const [tabIndex, setTabIndex] = useState<number>(0);

	const handleTabChange = (
		event: React.SyntheticEvent,
		newTabIndex: number
	) => {
		setTabIndex(newTabIndex);
	};

	const writeURL = '';

	const getInformationTab = () => {
		return (
			<TabPanel value={tabIndex} index={0}>
				<IconItem icon={<RoomIcon />}>{roadAddressName}</IconItem>
				<IconItem icon={<MapIcon />}>길찾기 바로가기</IconItem>
				<IconItem icon={<LocalPhoneIcon />}>{phone}</IconItem>
				<Footer>
					이 정보는 카카오 지도 API를 기반으로 제공됩니다.
				</Footer>
			</TabPanel>
		);
	};

	const getReviewTab = () => {
		return (
			<TabPanel value={tabIndex} index={1}>
				<Link to={writeURL}>리뷰 작성하러 가기</Link>
				<RestaurantRiviewItem
					userID="testID"
					reviewRating={4}
					reviewText="음식도 맛있었고 주인분도 친절하셨어요"
					reviewDate="2021/11/18 16:58"
				/>
				<RestaurantRiviewItem
					userID="testID"
					reviewRating={4}
					reviewText="음식도 맛있었고 주인분도 친절하셨어요"
					reviewDate="2021/11/18 16:58"
				/>
			</TabPanel>
		);
	};
	return (
		<Wrapper>
			<ColorBox color={color} onClick={onGoBackClick} />
			<Title>{placeName}</Title>
			<StyledContainer>
				<span>⭐{star} / 5</span>
				<span>리뷰 {review}개</span>
			</StyledContainer>
			<TapPanelWrapper>
				<Tabs value={tabIndex} onChange={handleTabChange}>
					<Tab label="정보" />
					<Tab label="리뷰" />
				</Tabs>
				{getInformationTab()}
				{getReviewTab()}
			</TapPanelWrapper>
		</Wrapper>
	);
};

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	alignItems: 'center',
});

const ColorBox = styled.span`
	width: 100%;
	height: 200px;
	background: ${(props) => props.color};

	&:hover {
		transition: transform 1s;
		filter: brightness(70%);
	}
`;

const Title = styled('h1')({
	fontSize: '30px',
});

const StyledContainer = styled('div')({
	display: 'flex',
	width: '40%',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: '20px',
});

const TapPanelWrapper = styled('div')({
	width: '100%',
	flex: 1,
});

const Footer = styled('h4')({
	padding: '0px',
	margin: '0px',
	paddingTop: '30px',
	color: 'grey',
});

export default RestaurantInformation;
