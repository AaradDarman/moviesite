import React from "react";
import styled from "styled-components";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

import Toggle from "../Toggler";
import useBreakpoints from "../../utils/useBreakPoints";
import NavigationMenu from "../NavigationMenu";
import Carousel from "../Carousel";
import SpeceficPosts from "../shared/SpeceficPosts";
import UpSeries from "../UpSeries";
import Footer from "../Footer";
import MovieCategory from "../MovieCategory";
import BreadCrumbs from "../BreadCrumbs";
import DrawerMenu from "../DrawerMenu";

const HeaderContainer = styled.header`
  display: block;
  width: 100%;
  #search-input {
    background-color: ${({ theme }) => theme.primary.light};
    border-radius: 2rem;
    color: ${({ theme }) => theme.text};
    ::placeholder {
      color: ${({ isLight, theme }) => (isLight ? null : theme.text)};
    }
  }
  #search-input:focus {
    box-shadow: 0 0 0 0 rgb(19 124 189 / 0%), 0 0 0 0 rgb(19 124 189 / 0%),
      inset 0 0 0 1px rgb(16 22 26 / 15%), inset 0 1px 1px rgb(16 22 26 / 20%);
  }
  #logo {
    height: 100%;
    border-radius: 0.2rem;
    background-color: ${({ isLight }) =>
      isLight ? null : "rgba(256, 256, 256, 0.4)"};
    padding: 5px 10px;
  }
  #logo img {
    height: 100%;
    width: 100px;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${({ theme }) => theme.secondary.main};
  &:hover {
    color: #fff;
  }
  ::before {
    content: "";
    -webkit-mask: url("/images/user.svg");
    mask: url("/images/user.svg");
    margin-right: 5px;
    display: inline-block;
    width: 20px;
    height: 20px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-color: #fff;
    vertical-align: -10%;
  }
  @media screen and (max-width: 576px) {
    &::before {
      margin-right: 0;
    }
  }
`;

const lastDubbedFilms = [
  { title: "Hangover", imageUrl: "/images/m5.jpg", imdbRate: "6.2" },
  {
    title: "Millions Dollor Baby",
    imageUrl: "/images/movie2.jpg",
    imdbRate: "7.2",
  },
  { title: "Top Gun", imageUrl: "/images/movie3.jpg", imdbRate: "5.1" },
  { title: "The Super Deep", imageUrl: "/images/movie4.jpg", imdbRate: "3.2" },
  { title: "Platform", imageUrl: "/images/m4.jpg", imdbRate: "8.5" },
];

const upSeries = [
  {
    updateText: "?????????? ???????? ?????? ?????? ?????? ?????????? ????",
    title: "The Mighty Ducks",
    imageUrl: "/images/series1.jpg",
  },
  {
    updateText: "?????? 04 - ???????? 04 ?????????? ????",
    title: "BlackList",
    imageUrl: "/images/series2.jpg",
  },
  {
    updateText: "?????? 02 - ???????? 02 ?????????? ????",
    title: "Van Helsing",
    imageUrl: "/images/series3.jpg",
  },
  {
    updateText: "?????? 05 - ???????? 07 ?????????? ????",
    title: "Dynasty",
    imageUrl: "/images/series4.jpg",
  },
  {
    updateText: "?????? 08 - ???????? 19 ?????????? ????",
    title: "War Of The Worlds",
    imageUrl: "/images/series5.jpg",
  },
];

const MainLayout = (props) => {
  const { isMd } = useBreakpoints();

  const { children, theme, toggleTheme, location } = props;

  return (
    <>
      <HeaderContainer isLight={theme === "light" ? true : false}>
        <div className="row m-0 header-top-section align-items-center justify-content-around w-100 py-2">
          <div className="d-flex align-items-center">
            <LoginButton className="btn">{isMd && "????????/?????? ??????"}</LoginButton>
            <Toggle
              className="d-none d-md-flex ml-2"
              theme={theme}
              toggle={toggleTheme}
            />
          </div>
          <FormGroup
            labelFor="text-input"
            className="m-0 col-5 rtl d-none d-md-flex"
          >
            <InputGroup
              id="search-input"
              placeholder="?????? ???????? ???? ?????????? ???? ???????? ???????? ..."
              large
              leftElement={<Button minimal icon="search"></Button>}
            />
          </FormGroup>
          <a href="/" id="logo" title="">
            <img src="/images/logo.svg" alt="Logo" />
          </a>
          <DrawerMenuIcon
          <DrawerMenu {...props} />
        </div>
        <NavigationMenu
        <NavigationMenu />
      </HeaderContainer>
      {location.pathname === "/" ? <Carousel {...theme} /> : null}
      <div className="px-3 px-lg-5">
        <div className="row">
          {location.pathname !== "/" ? (
            <BreadCrumbs className="col-12 px-3 px-lg-0" />
          ) : null}
        </div>
        <div className="row">
          <aside className="col-12 col-lg-4 p-lg-0 pr-lg-2 order-1 order-lg-0">
            <SpeceficPosts
              title="?????????? ???????? ?????? ??????????"
              iconUrl="/images/translation.svg"
              items={lastDubbedFilms}
            />
            <SpeceficPosts
              title="???????? ?????? 2021"
              option="???????????? ??????"
              iconUrl="/images/new.svg"
              items={lastDubbedFilms}
            />
            <UpSeries
              title="?????????? ?????? ???????? ??????"
              iconUrl="/images/refresh.svg"
              appTheme={theme}
              items={upSeries}
            />
            <SpeceficPosts
              title="???????????? ???????? ????"
              option="???????????? ??????"
              iconUrl="/images/best.svg"
              items={lastDubbedFilms}
            />
            <SpeceficPosts
              title="???????? ?????? ??????????"
              option="???????????? ??????"
              iconUrl="/images/soon.svg"
              items={lastDubbedFilms}
            />
            <MovieCategory />
            <SpeceficPosts
              title="?????????? ???????? ?????? ????????????"
              option="???????????? ??????"
              iconUrl="/images/new.svg"
              items={lastDubbedFilms}
            />
          </aside>
          <content className="col-12 col-lg-8 p-lg-0 pl-lg-2 order-0 order-lg-1">
            {children}
          </content>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
