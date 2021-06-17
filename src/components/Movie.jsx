import React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import styled, { useTheme } from "styled-components";
import { hexToRGBA, LightenDarkenColor } from "../utils/colorConverter";

const Wraper = styled.article`
  direction: rtl;
  background-color: ${({ theme }) => theme.primary.light};
  border-radius: 0.5rem;
  padding: 0.8rem;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  a {
    position: relative;
    display: block;
  }
  a::after {
    content: "asdaf";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }
  .img-wraper {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .img-wraper:hover a::after {
    opacity: 0.3;
  }
  .special-offer {
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    overflow: hidden;
    line-height: 40px;
    margin-top: 1rem;
    padding-right: 10px;
    background-color: ${hexToRGBA("#1a1a1f", 0.2)};
  }
  span > span {
    margin-right: auto;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.accent};
    height: 100%;
    width: 60px;
    color: #fff;
  }
  i {
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  h2 {
    display: flex;
    align-items: center;
  }
  h2 > a {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    letter-spacing: 0;
    transition: all 300ms ease-in-out;
  }
  h2 > a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.text, 70)};
  }
  h2 > button {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 6px;
    font-size: 1.2rem;
    margin-right: auto;
    background-image: none;
    box-shadow: 1px 2px 3px rgb(25 25 27 / 61%);
    border-radius: 50%;
    border: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.primary.light};
  }
  ul {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
  }
  li {
    margin-bottom: 1rem;
    transition: all 300ms ease-in-out;
  }
  strong {
    display: inline-block;
    min-width: 76px;
    text-align: center;
    background-color: ${({ theme }) => theme.primary.main};
    border-radius: 1rem;
    padding: 0.2rem 0.8rem;
    margin-left: 0.5rem;
    transition: inherit;
  }
  strong:hover {
    background-color: ${({ theme }) =>
      theme.isDark ? theme.secondary.dark : theme.secondary.main};
    color: ${({ theme }) => (theme.isDark ? null : theme.primary.main)};
  }
  li > a {
    color: ${({ theme }) => theme.text};
    transition: inherit;
  }
  li > a:hover {
    color: ${({ theme }) =>
      theme.isDark ? theme.secondary.dark : theme.secondary.main};
  }
  li:last-of-type {
    position: absolute;
    top: 10px;
    left: 0;
    font-family: Arial, sans-serif;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 0.2rem;
    padding: 0 0.5rem;
  }
  ul > li:nth-child(2) > span {
    display: inline-block;
    font-family: Arial, sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
  }
  ul > li:first-child > i {
    font-size: 2rem;
    width: 30px;
    color: ${({ theme }) => theme.accent};
  }
  ul > li:first-child > a {
    display: flex;
    align-items: center;
  }
  ul > li > a > span:nth-child(2n) {
    color: ${({ theme }) => theme.accent};
  }
  ul > li > a > span {
    display: inline-block;
    padding: 0 2px;
    letter-spacing: 1px;
  }
`;

const SummaryWraper = styled.div`
  margin: 1rem 0;
  font-size: 0.88rem;
  span:first-child {
    color: ${({ theme }) =>
      theme.isDark
        ? LightenDarkenColor(theme.text, 70)
        : LightenDarkenColor(theme.text, -70)};
    margin-left: 4px;
  }
  p {
    display: inline;
  }
  span > i {
    margin-left: 2px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.88rem;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li:last-child {
    margin-right: 1.5rem;
  }
  li i {
    margin-left: 3px;
  }
  a {
    background-color: ${({ theme }) =>
      theme.isDark
        ? theme.primary.main
        : LightenDarkenColor(theme.primary.main, -30)};
    color: ${({ theme }) => theme.text};
    padding: 4px 0.5rem 4px 0;
    border-radius: 0 1rem 1rem 1rem;
    font-weight: 300;
  }
  a > span {
    background-color: ${({ theme }) =>
      theme.isDark ? theme.secondary.dark : theme.secondary.main};
    color: ${({ theme }) => LightenDarkenColor("#ffffff", 70)};
    border-radius: 0 1rem 1rem 1rem;
    padding: 3px 1.1rem;
  }
`;

const Movie = ({ film }) => {
  const appTheme = useTheme();
  const useStyles = makeStyles({
    arrow: {
      color: appTheme.primary.main,
    },
    tooltip: {
      backgroundColor: appTheme.primary.main,
      color: appTheme.text,
      direction: "rtl",
      fontFamily: "BYekan",
      fontSize: "0.8rem",
      boxShadow:
        "0 0 0 1px rgb(16 22 26 / 15%), 0 0 0 rgb(16 22 26 / 0%), 0 0 0 rgb(16 22 26 / 0%);",
    },
  });

  const classes = useStyles();
  return (
    <Wraper className="rtl bp3-card mb-3">
      <div className="row">
        <RightSide className="col-12 col-lg-5 col-xl-4">
          <div className="img-wraper">
            <a href="">
              <img src={film.imgUrl} alt="" className="w-100 h-100" />
            </a>
          </div>
          {film.specialOffers.length > 0
            ? film.specialOffers.map((specialOffer) => (
                <span className='special-offer'>
                  {specialOffer}{" "}
                  <span>
                    <i className="fas fa-check-circle"></i>
                  </span>
                </span>
              ))
            : null}
        </RightSide>
        <LeftSide className="col-12 col-lg-7 col-xl-8">
          <h2 className="flex-column flex-lg-row my-2 my-lg-0">
            <a href="">
              <i className="fas fa-film mr-1"></i>دانلود فیلم {film.title}
            </a>
            <button>
              <i className="far fa-bookmark"></i>
            </button>
          </h2>
          <ul>
            <li>
              <a>
                <i class="fab fa-imdb"></i>
                <span>{film.imdbRate}</span>
                <span>از 10 میانگین رای</span>
                <span>{film.votersNumber}</span>
                <span>نفر</span>
              </a>
            </li>
            <li>
              <strong>کیفیت</strong>
              <span>{film.resolution}</span>
            </li>
            <li>
              <strong>ژانر</strong>
              {film.genres.map((genre) => (
                <>
                  <a href={`/genre/${genre}`}>{`${genre}, `}</a>
                </>
              ))}
            </li>
            <li>
              <strong>سال انتشار</strong>
              <a href="">{film.year}</a>
            </li>
            <li>
              <strong>محصول</strong> <a href="">{film.country}</a>
            </li>
            <li>
              <strong>کارگردان</strong>
              <a href="">{film.director}</a>
            </li>
            <li>
              <strong>بازیگران</strong>
              {film.actors.map((actor) => (
                <>
                  <a href={`/actor/${actor}`}>{`${actor}, `}</a>
                </>
              ))}
            </li>
            <Tooltip
              classes={classes}
              test="sokol"
              title="رده سنی"
              arrow
              placement="right"
            >
              <li>{film.ageRate}</li>
            </Tooltip>
          </ul>
        </LeftSide>
      </div>
      <SummaryWraper>
        <p>
          <span>
            <i className="fas fa-comment-dots"></i>خلاصه داستان:{" "}
          </span>
          {film.summary}
        </p>
      </SummaryWraper>
      <Footer className="flex-column flex-lg-row">
        <ul className="m-lg-0 mb-2">
          <li>
            <i class="far fa-calendar-alt"></i>
            {film.createAt}
          </li>
          <li>
            <i class="far fa-comment"></i>
            {`${film.comments} دیدگاه`}
          </li>
        </ul>
        <a className="align-self-center align-self-lg-center" href="">
          ادامه مطلب <span>دانلود</span>
        </a>
      </Footer>
    </Wraper>
  );
};

export default Movie;