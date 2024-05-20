"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import logo from "@/assets/logo.png"
import Image from "next/image"
import { IconButton, Stack } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Link from "next/link"
import Header from "./Header"

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
        pathname: "/categories/news",
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

function Navbar() {

    return (
        <>
            <Header></Header>
            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} width={160} height={160} alt="logo"/>
                        <Box className="w-full text-center">
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname} >
                                    <Button className="text-white">{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={2} sx={{
                                "& svg": {
                                    color: "white",
                                }
                            }}>
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
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Navbar;
