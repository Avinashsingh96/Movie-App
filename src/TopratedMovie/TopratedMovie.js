import React, { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";
import TopRatedMovieCard from "../CommonComponent/CardComponent/Cardcomponent";
import { makeStyles } from "@material-ui/core/styles";
import { TOP_RATED_MOVIE_API_URL, MOVIE_IMG_URL } from "../API_URL/Api_URL";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    padding: "30px",
  },
  topRatedMovie: {
    margin: "10px 0px",
  },
});

export default function TopratedMovie() {
  const classes = useStyles();
  const [movieData, setTopRatedMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const topRatedMovieHandler = async () => {
    const response = await fetch(TOP_RATED_MOVIE_API_URL);
    const data = await response.json();
    const transformedMovieData = data.results.map((movieData) => {
      return {
        id: movieData.id,
        poster_path: MOVIE_IMG_URL + movieData.poster_path,
        title: movieData.title,
        release_date: movieData.release_date,
        vote_average: movieData.vote_average,
      };
    });

    setTopRatedMovieData(transformedMovieData);
    setIsLoading(false);
  };
  useEffect(() => {
    topRatedMovieHandler();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.topRatedMovie}>
        Toprated Movie
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        {movieData.map((data) => {
          return (
            <Grid item xs={3} key={data.id}>
              {!isLoading && movieData.length > 0 && (
                <TopRatedMovieCard
                  poster_path={data.poster_path}
                  title={data.title}
                  release_date={data.release_date}
                  vote_average={data.vote_average}
                />
              )}
              {!isLoading && movieData.length === 0 && <p>Found no movies.</p>}
              {isLoading && <p>Loading...</p>}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
