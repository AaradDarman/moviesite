import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Movie from "../components/Movie";
import RelatedPosts from "../components/RelatedPosts";
import { setMovie } from "../redux/actions/movie";

const DownloadPage = ({ match }) => {
  const dispatch = useDispatch();
  const { movies, tvShows, movie } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(match);
    if (match.path.search("/movie") != -1) {
      dispatch(
        setMovie(
          movies.find((movie) => {
            return movie.title === match.params.title;
          })
        )
      );
    } else if (match.path.search("/tv-show") != -1) {
      console.log("else");
      dispatch(
        setMovie(
          tvShows.find((tvShow) => {
            return tvShow.title === match.params.title;
          })
        )
      );
    }
  }, []);
  return (
    <>
      <Movie film={movie} />
      <RelatedPosts movie={movie} />
    </>
  );
};

export default DownloadPage;
