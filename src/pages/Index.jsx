import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Movies from "../components/Movies";
import WeeklySchedule from "../components/WeeklySchedule";

const Index = () => {
  return (
    <>
      <WeeklySchedule />
      <Movies />
    </>
  );
};

export default Index;
