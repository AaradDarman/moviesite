import React from "react";
import { Route, Switch } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import DownloadPage from "../pages/DownloadPage";
import Index from "../pages/Index";
import MoviesPage from "../pages/MoviesPage";

const MovieSite = (props) => {
  return (
    <Switch>
      <MainLayout {...props}>
        <Route path={["/"]}>
          <Switch>
            <Route
              path={[
                "/movie",
                "/movie/page/:pageNumber",
                "/movie/:category",
                "/movie/:category/page/:pageNumber",
                "/tv-show",
                "/tv-show/page/:pageNumber",
                "/tv-show/:category",
                "/tv-show/:category/page/:pageNumber",
              ]}
              exact
              component={MoviesPage}
            />
            <Route
              path={["/movie/download/:title", "/tv-show/download/:title"]}
              component={DownloadPage}
            />
            <Route path="/page/:pageNumber" exact component={Index} />
            <Route path="/" exact component={Index} />
            <Route path="*" exact render={() => <div>Not Found</div>} />
          </Switch>
        </Route>
      </MainLayout>
    </Switch>
  );
};

export default MovieSite;
