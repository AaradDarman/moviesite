import React from "react";

import Carousel from "../components/Carousel";
import MainLayout from "../components/layouts/MainLayout";

const MovieSite = (props) => {
  return (
    <MainLayout {...props}>
      <Carousel {...props} />
    </MainLayout>
  );
};

export default MovieSite;
