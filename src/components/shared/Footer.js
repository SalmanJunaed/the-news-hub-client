"use client"

import { Box, Button, Container, IconButton, Typography} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';



const Footer = () => {

    const navItems = [
        {
            route:"Home",
            pathname: "/",
        },
        {
            route:"Pages",
            pathname: "/pages",
        },
        {
            route:"Category",
            pathname: "/category",
        },
        {
            route:"News",
            pathname: "/news",
        },
        {
            route:"About",
            pathname: "/about",
        },
        {
            route:"Contact",
            pathname: "/contact",
        },
    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{ "& svg": { color: "white", } }}>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon/>
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname} >
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2" color="gray" textAlign="center">
                &#169; 2024 The NEWS Hub. Author Salman Junaed Islam.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;