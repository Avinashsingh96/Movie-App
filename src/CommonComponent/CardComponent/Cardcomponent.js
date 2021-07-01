import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
     maxWidth: 250,
    // marginTop: "10px",
    height: "100%",
    // transform:"translateY(101%)"
    
  },
  media: {
    height: "100%",
    // position: "relative",
  },
  rate:{
    color:"green"
  },
  cardContent:{
    padding:10
  }
});

export default function TopRatedMovieCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={props.poster_path}
          className={classes.media}
        />
        <CardContent classname={classes.cardContent}>
          <Typography gutterBottom variant="subtitle1" component="p">
            {props.title}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
              >
                {props.release_date}
              </Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="subtitle1"className={classes.rate} >
                Rate:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              
              <Typography variant="subtitle1" >
                {props.vote_average}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
