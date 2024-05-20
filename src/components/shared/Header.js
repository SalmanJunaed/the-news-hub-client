import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import HeadingLogo from '@/assets/Header.png';
import { showCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = showCurrentDate();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className='mx-auto' src={HeadingLogo} width={600} height={600} alt='logo'/>
                <Typography variant="body1" color="gray" textAlign="center" className='my-2'>
                Journalism Without Fear or Favour.
                </Typography>
                <Typography variant="body2" color="gray" textAlign="center">
                {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;