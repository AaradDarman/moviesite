import React from "react";
import { useSelector } from "react-redux";
import Movies from "../components/Movies";
import WeeklySchedule from "../components/WeeklySchedule";

const Index = (props) => {
  const { movies } = useSelector((state) => state);
  return (
    <>
      <WeeklySchedule />
      <Movies
        items={movies}
        totalItems={100}
        {...props}
      />
    </>
  );
};

export default Index;
