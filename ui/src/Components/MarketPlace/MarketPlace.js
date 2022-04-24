import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Common/Header';
import MainFeaturedPost from '../Common/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import MarketPlaceTile from './MarketPlaceTile';

export default function MarketPlace() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Market Place" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <MarketPlaceTile/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Market Place',
  description:
    "One stop platform to search and buy personalised & enviornmental friendly products",
  image: 'https://thumbs.dreamstime.com/b/zero-waste-elements-slogan-collection-eco-friendly-stickers-lettering-reusable-items-products-bundle-sustainable-living-211340710.jpg',
  imgText: 'Market Place',
  linkText: 'Continue reading…',
};