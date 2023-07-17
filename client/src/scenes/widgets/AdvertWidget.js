import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () = {
	const { palette } = useTheme();
	const dark = palette.neutral.dark;
	const main = palette.neutral.main;
	const medium = palette.neutral.medium;

	return (
		<WidgetWrapper>
			<FlexBetween>
				<Typography
				color={dark}
				variant='h5'
				fontWeight='500'
				>
					Sponsored
				</Typography>

				<Typography color=>
					
				</Typography>
			</FlexBetween>
		</WidgetWrapper>
	)
};

export default AdvertWidget;