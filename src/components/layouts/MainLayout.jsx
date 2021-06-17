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
    updateText: "دوبله قسمت آخر فصل دوم اضافه شد",
    title: "The Mighty Ducks",
    imageUrl: "/images/series1.jpg",
  },
  {
    updateText: "فصل 04 - قسمت 04 اضافه شد",
    title: "BlackList",
    imageUrl: "/images/series2.jpg",
  },
  {
    updateText: "فصل 02 - قسمت 02 اضافه شد",
    title: "Van Helsing",
    imageUrl: "/images/series3.jpg",
  },
  {
    updateText: "فصل 05 - قسمت 07 اضافه شد",
    title: "Dynasty",
    imageUrl: "/images/series4.jpg",
  },
  {
    updateText: "فصل 08 - قسمت 19 اضافه شد",
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
            <LoginButton className="btn">{isMd && "ورود/ثبت نام"}</LoginButton>
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
              placeholder="نام فیلم یا سریال را وارد کنید ..."
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
      <Carousel {...theme} />
      <div className="px-3 px-lg-5">
        <div className="row">
          <aside className="col-12 col-lg-4">
            <SpeceficPosts
              title="آخرین فیلم های دوبله"
              iconUrl="/images/translation.svg"
              items={lastDubbedFilms}
            />
            <SpeceficPosts
              title="فیلم های 2021"
              option="مشاهده همه"
              iconUrl="/images/new.svg"
              items={lastDubbedFilms}
            />
            <UpSeries
              title="سریال های بروز شده"
              iconUrl="/images/refresh.svg"
              appTheme={theme}
              items={upSeries}
            />
            <SpeceficPosts
              title="برترین فیلم ها"
              option="مشاهده همه"
              iconUrl="/images/best.svg"
              items={lastDubbedFilms}
            />
            <SpeceficPosts
              title="فیلم های بزودی"
              option="مشاهده همه"
              iconUrl="/images/soon.svg"
              items={lastDubbedFilms}
            />
            <MovieCategory />
            <SpeceficPosts
              title="آخرین فیلم های ایرانی"
              option="مشاهده همه"
              iconUrl="/images/new.svg"
              items={lastDubbedFilms}
            />
          </aside>
          <content className="col-12 col-lg-8">{children}</content>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
