import React from "react";
import { useSelector } from "react-redux";
import Movies from "../components/Movies";
import WeeklySchedule from "../components/WeeklySchedule";

const Index = (props) => {
  const { movies } = useSelector((state) => state);
  const { match, history } = props;

  const handlePageChange = (selected) => {
    history.push(`/page/${selected + 1}`);
  };
  return (
    <>
      {match.params.pageNumber == 1 || match.path === '/' ? <WeeklySchedule /> : null}
      <Movies
        items={movies}
        totalItems={100}
        onPageChange={handlePageChange}
        {...props}
      />
    </>
  );
};

export default Index;
