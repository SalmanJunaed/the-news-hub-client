import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from 'next/image';

const LatestNews = () => {
    return (
        <>
            <Box className="">
                <Card>
                    <CardActionArea>
                        <CardMedia component="div">
                            <Image src={topNews} width={800} height={800} alt="Top News" />
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

                {/* Bottom Grid */}
                <Grid container className="mt-5" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/* Grid Card container - 1 */}
                    <Grid item xs={6}>
                        {/* Grid Card  */}
                        <Card>
                            <CardActionArea>
                                <CardMedia component="div">
                                    <Image src={topNews} width={800} height={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded-md'>
                                        Technology
                                    </p>
                                    <Typography gutterBottom >
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
                    </Grid>
                    {/* Grid Card container - 2 */}
                    <Grid item xs={6}>
                        {/* Grid Card  */}
                        <Card>
                            <CardActionArea>
                                <CardMedia component="div">
                                    <Image src={topNews2} width={800} height={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded-md'>
                                        Technology
                                    </p>
                                    <Typography gutterBottom >
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
                    </Grid>
                    {/* Grid Card container - 3 */}
                    <Grid item xs={6}>
                        {/* Grid Card  */}
                        <Card>
                            <CardActionArea>
                                <CardMedia component="div">
                                    <Image src={topNews2} width={800} height={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded-md'>
                                        Technology
                                    </p>
                                    <Typography gutterBottom >
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
                    </Grid>
                    {/* Grid Card container - 4 */}
                    <Grid item xs={6}>
                        {/* Grid Card  */}
                        <Card>
                            <CardActionArea>
                                <CardMedia component="div">
                                    <Image src={topNews} width={800} height={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded-md'>
                                        Technology
                                    </p>
                                    <Typography gutterBottom >
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
                    </Grid>
                </Grid>

            </Box>
        </>
    );
};

export default LatestNews;




