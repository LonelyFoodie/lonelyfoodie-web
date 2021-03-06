import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import userState from '@atoms/user';
import { useRecoilValue } from 'recoil';

const MyInfoEdit = ({ history }: RouteComponentProps) => {
	const user = useRecoilValue(userState);

	const [dep, setDep] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setDep(event.target.value as string);
	};

	return (
		<Container
			maxWidth="sm"
			sx={{
				my: 'auto',
				mx: 'auto',
				bgcolor: '#e1f5fe',
				width: '100vh',
				height: '70vh',
			}}
		>
			<h1>마이페이지-내 정보 수정하기</h1>
			<ul>이메일: {user?.email}</ul>
			<ul>
				<br />
				<TextField
					id="userNick"
					label="닉네임"
					variant="standard"
					defaultValue={user?.nickname}
				/>
				<br />
				<TextField id="userStuNum" label="학번" variant="standard" />
				<br />
				학과: {'    '}
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel id="selectDepartment">학과 선택</InputLabel>
						<Select
							labelId="selectDepartment"
							id="department"
							value={dep}
							label="학과 선택"
							onChange={handleChange}
						>
							<MenuItem value={0}>선택 안함</MenuItem>
							<MenuItem value={1}>컴퓨터과학부</MenuItem>
							<MenuItem value={2}>전기전자컴퓨터공학부</MenuItem>
							<MenuItem value={3}>경영학과</MenuItem>
							<MenuItem value={4}>통계학과</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<br />
				성별: {'   '}
				<FormControl component="fieldset">
					<RadioGroup
						row
						aria-label="position"
						name="position"
						defaultValue="noSelect"
					>
						<FormControlLabel
							value="noSelect"
							control={<Radio />}
							label="선택 안함"
						/>
						<FormControlLabel
							value="Male"
							control={<Radio />}
							label="남"
						/>
						<FormControlLabel
							value="Female"
							control={<Radio />}
							label="여"
						/>
					</RadioGroup>
				</FormControl>
			</ul>
			<Stack direction="row-reverse" spacing={2}>
				<Button variant="contained">저장</Button>
				<Button
					variant="outlined"
					onClick={() => history.push('/mypage')}
				>
					취소
				</Button>
			</Stack>
		</Container>
	);
};

export default MyInfoEdit;
