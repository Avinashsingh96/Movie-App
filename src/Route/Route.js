import React from "react";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpcomingMovie from "../UpComingMovie/UpComing";
import Header from "../CommonComponent/Header/Header";
import TopRatedMovie from "../TopratedMovie/TopratedMovie";


const MovieRoute = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={UpcomingMovie} />
          <Route path="/up-coming-movie" component={UpcomingMovie} />
          <Route path="/top-rated-movie" component={TopRatedMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MovieRoute;
