import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import GenericCard from "../Common/GenericCard";
import { Link } from "react-router-dom";

export default function HomePageTile() {
  const classes = useStyles();
  //Only on first render
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Container className={classes.cardGrid} maxWidth="lg">
          <Grid  align="center"
              direction="row"
              alignItems="center"
              justifyContent="center" container >
            {dashboardStats.map((paper) => (
              <Grid item key={paper.title} xs={6} sm={6} >
                <Paper elevation={0} className={classes.paper} >
                  <Grid>
                    <img alt="icon" src={paper.icon} height="100px" width="100px" className={classes.icon} />
                  </Grid>
                  <Typography variant='body1' className={classes.divHeading}>
                    {paper.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <br />
          
        </Container>
     
        <Typography variant="h5" className={classes.divHeading}>
          <b>Challenge Categories</b>
        </Typography>
    <br />
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justifyContent="center"
          //  style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Link to={"/events/csr"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="CSR Icon" image="https://kmdastur.com/wp-content/uploads/csr-KMD.png" desc="CSR"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/health&wellness"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Health&Wellness Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/health-and-wellness-4425334-3668992.png" desc="Health & Wellness"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/innovation&technology"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Innovation&Technology Icon" 
                image="https://cdn.iconscout.com/icon/premium/png-256-thumb/innovative-technology-738852.png" desc="Innovation & Technology"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/culture"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Culture Icon" 
                image="https://cdn.iconscout.com/icon/premium/png-256-thumb/culture-3728068-3108373.png" desc="Life & Culture"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/art"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Art Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/painting-3333455-2773690.png" desc="ART"/>
            </Link>
          </Grid>
          {/* <Grid item>
            <GenericCard alt="Finance Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/digital-finance-1133706.png" desc="FINANCE"/>
          </Grid> */}
          <Grid item>
            <Link to={"/events/strategy"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Strategy Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/strategy-plan-target-achieve-board-sketch-business-model-60322.png" desc="Strategy"/>
            </Link>
          </Grid>
          {/* <Grid item>
            <img
              src="  https://cdn.iconscout.com/icon/premium/png-256-thumb/human-resource-management-1528152-1297600.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid> */}
        </Grid>

        <br />
      
      </main>
    </React.Fragment>
  );
}


const dashboardStats = [
  // {
  //   title: 'Challenges / Events',
  //   icon: "https://media.istockphoto.com/vectors/employee-engagement-concept-vector-id1330594434?k=20&m=1330594434&s=612x612&w=0&h=EP9lQ2z55xwRktPnEIRXEByAZLpObnMpvqUQ60EFTsU=",
  //   value: 0
  // },
  {
    title: 'Games / Virtual City',
    value: 1,
    icon: "https://miro.medium.com/max/1400/1*SfgR5Q4wSJWDAXUIuMHfKA.png",
  },
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#ca142a'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '80%',
    height: '80%',
    padding: '5%'
  },
}));
