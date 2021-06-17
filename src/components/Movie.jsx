import React, { useState } from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import styled, { useTheme } from "styled-components";
import { hexToRGBA, LightenDarkenColor } from "../utils/colorConverter";
import { Link, useRouteMatch } from "react-router-dom";
import { Collapse, Button, Menu } from "@blueprintjs/core";
import ImageGallery from "./ImageGallery";

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
  h2 > a > .tv {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.text};
    -webkit-mask: url("/images/tv-screen.svg");
    mask: url("/images/tv-screen.svg");
    display: inline-block;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: cover;
    mask-size: cover;
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

const DownloadSection = styled.div`
  font-size: 0.8rem;
  .download-title {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  .download-title > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary.main};
    border-radius: 2rem;
    padding: 10px;
    margin-left: 5px;
  }
  .download-title span i {
    width: 20px;
    height: 20px;
    color: #bfbfbf;
    background-color: ${({ theme }) => theme.text};
    -webkit-mask: url("/images/inbox.svg");
    mask: url("/images/inbox.svg");
    display: inline-block;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: cover;
    mask-size: cover;
  }
  .trailer-link {
    display: flex;
    align-items: center;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    color: ${({ theme }) => LightenDarkenColor(theme.secondary.light, 20)};
    background-color: ${({ theme }) => hexToRGBA(theme.secondary.main, 0.2)};
  }
  .trailer-link i {
    font-size: 1.2rem;
    margin-right: auto;
  }
`;
const DownloadLinksWraper = styled.div`
  font-size: 0.8rem;
  .bp3-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: inherit;
    width: 100%;
    background-color: ${({ theme }) => theme.primary.main};
    background-image: none;
    color: ${({ theme }) => LightenDarkenColor(theme.text, 50)};
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    text-align: right;
    box-shadow: none;
    font-size: inherit;
    transition: all 300ms ease-in-out;
  }
  .bp3-button:hover {
    background-color: ${({ theme }) => theme.primary.main};
    box-shadow: none;
  }
  .bp3-button.open {
    background-color: ${({ theme }) =>
      LightenDarkenColor(theme.primary.main, 20)};
  }
  .bp3-button.open:hover {
    background-color: ${({ theme }) =>
      LightenDarkenColor(theme.primary.main, 20)};
    box-shadow: none;
  }
  .bp3-button::after {
    content: "مشاهده لینک ها";
    background-color: ${({ theme }) => theme.primary.light};
    padding: 0 4px;
    border-radius: 0.3rem;
  }
  .bp3-menu {
    background-color: inherit;
    padding: 0;
    color: inherit;
    text-align: right;
    font-size: inherit;
  }
  .bp3-menu li {
    padding: 0.5rem 0;
  }
  .bp3-menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 0.3rem;
    padding: 1rem 0;
    cursor: inherit;
  }
  .bp3-menu-item:hover {
    background-color: inherit;
  }
  .bp3-menu-item a {
    padding: 0.2rem 0.5rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
    color: inherit;
    transition: all 300ms ease-in-out;
  }
  .bp3-menu-item a:hover {
    background-color: ${({ theme }) => theme.accent} !important;
    color: black;
    border-color: ${({ theme }) => theme.primary.light} !important;
  }
  .bp3-menu-item a:first-of-type {
    margin-right: auto;
    background-color: ${({ theme }) => theme.primary.light};
    border: 1px solid ${({ theme }) => theme.text};
  }
  .bp3-menu-item a:last-of-type {
    background-color: ${({ theme }) => theme.primary.main};
    border: 1px solid ${({ theme }) => theme.primary.main};
  }
  .bp3-menu-item span {
    text-transform: uppercase;
  }
  .bp3-menu-item span:first-child {
    background: linear-gradient(90deg, #c9171f, #900000);
    color: ${({ theme }) => (theme.isDark ? theme.text : "#fff")};
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
  }
`;

const DownloadLinks = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className={open ? "open" : null} onClick={() => setOpen(!open)}>
        {item.title}
      </Button>
      <Collapse isOpen={open}>
        <Menu>
          {item.linkItems &&
            item.linkItems.map((link) => (
              <li>
                <div className="bp3-menu-item rtl">
                  <span>{`کیفیت ${link.resolution}`}</span>
                  <span>{`فرمت: ${link.format}`}</span>
                  {link.encoder ? (
                    <span>{`انکودر:${link.encoder}`}</span>
                  ) : null}
                  <span>{`حجم: ${link.size}`}</span>
                  <a href={link.subtitleLink}>زیرنویس</a>
                  <a href={link.dlLink}>لینک دانلود</a>
                </div>
              </li>
            ))}
        </Menu>
      </Collapse>
    </>
  );
};

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

  const match = useRouteMatch();
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
          {film.specialOffers && film.specialOffers.length > 0
            ? film.specialOffers.map((specialOffer) => (
                <span className="special-offer">
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
              <i
                className={
                  film.type === "movie" ? "fas fa-film mr-1" : "tv mr-1"
                }
              ></i>
              {film.type === "movie" ? "دانلود فیلم " : "دانلود سریال "}
              {film.title}
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
              {film.genres &&
                film.genres.map((genre) => (
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
              <strong>محصول</strong>
              {film.country &&
                film.country.map((country) => (
                  <>
                    <a href={`/country/${country}`}>{`${country}, `}</a>
                  </>
                ))}
            </li>
            <li>
              <strong>کارگردان</strong>
              <a href="">{film.director}</a>
            </li>
            <li>
              <strong>بازیگران</strong>
              {film.actors &&
                film.actors.map((actor) => (
                  <>
                    <a href={`/actor/${actor}`}>{`${actor}, `}</a>
                  </>
                ))}
            </li>
            {film.ageRate && (
              <Tooltip
                classes={classes}
                title="رده سنی"
                arrow
                placement="right"
              >
                {<li className="age-rate">{film.ageRate}</li>}
              </Tooltip>
            )}
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
      {match.params.title ? (
        <DownloadSection>
          {film.imageGallery && (
            <ImageGallery
              imageGallery={film.imageGallery.map((img) => `/images/${img}`)}
            />
          )}
          {film.trailerLink ? (
            <a href={film.trailerLink} className="trailer-link">
              {film.type === "movie"
                ? "دانلود تریلر فیلم"
                : "دانلود تریلر سریال "}
              <i class="fab fa-youtube"></i>
            </a>
          ) : null}
          <span className="download-title">
            <span>
              <i></i>
            </span>
            لینک های دانلود
          </span>
          <DownloadLinksWraper>
            {film.downloadLinks &&
              film.downloadLinks.map((item) => <DownloadLinks item={item} />)}
          </DownloadLinksWraper>
        </DownloadSection>
      ) : null}
      <Footer className="flex-column flex-lg-row">
        <ul className="m-lg-0 mb-2">
          <li>
            <i class="far fa-calendar-alt"></i>
            {film.createAt}
          </li>
          <li>
            <i class="far fa-comment"></i>
            {film.comments ? `${film.comments} دیدگاه` : `بدون دیدگاه`}
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
