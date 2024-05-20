import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
        {/* <h1 className="text-4xl text-center py-6">Welcome to NEWS Home</h1> */}
        <Grid container spacing={2} className="py-8">
          <Grid item xs={8}>
            <LatestNews/>
          </Grid>
          <Grid item xs={4}>
            <SideBar/>
          </Grid>
        </Grid>
    </>
  );
};

export default HomePage;