import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 11
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
  divHeading: {
    color: '#e57373'
  },
  subHeading: {
    color: '#115293',
    fontWeight: '600'
  },
  desc: {
    color: '#7A8C98'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function MarketPlaceTile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {
    
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <React.Fragment>
      <CssBaseline />
          <main>
              <Typography variant="h5" className={classes.divHeading}>
                <b>Save Mother Earth</b>
              </Typography>
              <br />
              <Grid container spacing={4}>
                {featuredPosts.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          {card.title}
                        </Typography>
                        <Typography align="center" variant="body1" className={classes.desc} gutterBottom>
                          {card.description}
                        </Typography>
                       
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); 
                            // speak({ text: card.readmore,rate : 0.8})
                         }}
                          >
                          View More
                      </Button>
                     
                      <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                          >
                          Buy now
                      </Button>
                      </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
           
              <br />
              <Typography variant="h5" className={classes.divHeading}>
                <b>Digitally Enabling Citizens to buy Sustainable products</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
              Digital Market Place for Citizens who care for Mother Earth 
            </Typography>

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">{localStorage.getItem("f_title")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">

                    {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

                  </DialogContentText>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
          </main>
    </React.Fragment>


  );
}

  const featuredPosts = [
    {
      title: 'Eco-friendly Hand Wash',
      description:
      'This biodegradable blend powered by essential oils helps keep your hands germs free, healthy soft and clean.',
      image: 'https://cdn.shopify.com/s/files/1/0265/3087/3422/products/HandWash_7beb272a-fb82-4e41-9407-434c385c0e82_1000x.png?v=1650630263',
      },
    {
      title: 'Compostable Bamboo Products',
      description:
      'These products are made of either compostable or recyclable material to ensure that they do not end up in a landfill like many plastic products.',
      image: 'https://cdn.shopify.com/s/files/1/0523/3252/7770/products/Starter-Kit-1_62f36791-cf63-4c03-a63d-8c19946db6b3_800x.jpg?v=1650454901',
      },
    {
      title: 'Zero Waste Starter Kit ',
      description:
      'Thinking about going zero waste? No better time than now! Here is a little kit to help you get started with your zero waste lifestyle!',
      image: 'https://cdn.shopify.com/s/files/1/1770/7729/products/Zero-Waste-Starter-Kit_1_1440x1440.jpg?v=1603299873',
      }
  
  ];