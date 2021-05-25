import React from "react";
import styled from "styled-components";
import { Card, Elevation } from "@blueprintjs/core";

const MyCard = styled(Card)`
  background-color: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.text};
  &:hover {
    box-shadow: ${({ isLight }) =>
      isLight
        ? null
        : "0px 2px 6px 1px rgba(0, 0, 0, 0.6),0px 4px 8px 1px rgba(0, 0, 0, 0.4) !important"};
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  button {
    background-color: ${({ theme }) => theme.secondary.main};
    color: #fff;
  }
  button:hover {
    color: #fff;
  }
`;

const MovieCard = ({ theme }) => {
  return (
    <MyCard
      interactive={true}
      elevation={Elevation.TWO}
      isLight={theme === "light" ? true : false}
    >
      <h5>
        <a href="#">سوکولوز</a>
      </h5>
      <p>نوماروفاا</p>
      <button className="btn">سبووت</button>
    </MyCard>
  );
};

export default MovieCard;
