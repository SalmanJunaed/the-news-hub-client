import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import sideBarImage from "@/assets/side-top-news.png"
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";

const SideBar = () => {
    return (
        <Box className="">
            <Card>
                <CardActionArea>
                    <CardMedia component="div">
                        <Image src={sideBarImage} width={800} height={800} alt="Top News" />
                    </CardMedia>
                    <CardContent>
                        <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded-md'>
                            Technology
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            By Salman Junaed Islam - May 20 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Tesla still holds 9,720 Bitcoins, worth around $400 million at current prices. It will be interesting to see whether it holds on to the tokens in 2024 or sells. In the past, sales of Bitcoin have come when the price rises to new highs or when Tesla is in a tough spot financially.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Bottom cards  1*/}
            <Paper className="my-3" sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, }} >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Image alt="complex" src={sideBarImage} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {/* Bottom cards  2*/}
            <Paper className="my-3" sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, }} >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Image alt="complex" src={topNews2} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {/* Bottom cards  3*/}
            <Paper className="my-3" sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, }} >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Image alt="complex" src={topNews} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default SideBar;