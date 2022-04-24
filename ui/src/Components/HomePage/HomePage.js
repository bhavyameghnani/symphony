import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Common/Header';
import MainFeaturedPost from '../Common/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import HomePageTile from './HomePageTiles';

export default function HomePage() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Symphony" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <HomePageTile/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Symphony',
  description:
    "Technology craves Human Touch! Connecting Moms & their kids for better tomorrow by engaging in games & challenges for sustainability!",
  image: 'https://blogs.microsoft.com/wp-content/uploads/prod/2021/04/RE_Earth-day-blog-header-image.jpg',
  imgText: 'HomePage',
  linkText: 'Continue reading…',
};