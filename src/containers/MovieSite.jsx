import React from "react";
import { Route, Switch } from "react-router-dom";

import Carousel from "../components/Carousel";
import MainLayout from "../components/layouts/MainLayout";
import Index from "../pages/Index";

const MovieSite = (props) => {
  return (
    <MainLayout {...props}>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </MainLayout>
  );
};

export default MovieSite;
