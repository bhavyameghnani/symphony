import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import EventsPageTiles from "./EventsPageTiles";

export default function EventsPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Challenges / Events" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <EventsPageTiles />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Challenges / Events",
  description:
    "One stop platform to search and apply for challenges for sustainabilty & helping Mother Earth",
  image:
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/earth-405096_1920.jpeg?03B7UiVLgVaVS4rs.pDU.KnmkowdVPtx&size=770:433",
  imgText: "Events",
  linkText: "Continue reading…",
};
