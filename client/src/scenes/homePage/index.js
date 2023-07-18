import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar';
import UserWidget from 'scenes/widgets/UserWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import AdvertWidget from 'scenes/widgets/AdvertWidget';
import FriendListWidget from 'scenes/widgets/FriendListWidget'

const HomePage = () => {

	const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
	const { _id, picturePath } = useSelector((state) => state.user);

	return (
		<Box>
			<Navbar />
			<Box
			width='100%'
			padding='2rem 6%'
			pt='90px'
			display={isNonMobileScreens ? 'flex' : 'block'}
			gap='0.5rem'
			justifyContent='space-between'
			>
				<Box flexBasis={isNonMobileScreens ? '26%'  : undefined}
				position={isNonMobileScreens ? 'fixed' : undefined}
				width={isNonMobileScreens ? '23%' : undefined}
				>
					<UserWidget userId={_id} picturePath={picturePath} />
				</Box>

				<Box flexBasis={isNonMobileScreens ? '42%' : undefined}
				mt={isNonMobileScreens ? undefined : '2rem'}
				ml={isNonMobileScreens ? '29%' : undefined}
				>
					<MyPostWidget picturePath={picturePath} />
					<PostsWidget userId={_id} />
				</Box>
				{isNonMobileScreens && (
					<Box flexBasis='26%'
					position={isNonMobileScreens ? 'fixed' : undefined}
					right={isNonMobileScreens ? '6%' : undefined}
					width={isNonMobileScreens ? '23%' : undefined}
					>
						<AdvertWidget />
						<Box m='2rem 0' />
						<FriendListWidget userId={_id} />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default HomePage;