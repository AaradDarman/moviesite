import React from "react";
import styled from "styled-components";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

import Toggle from "../Toggler";
import useBreakpoints from "../../utils/useBreakPoints";
import DropDownMenu from "../shared/DropDownMenu";

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
  nav {
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem 4.8rem 1rem 0;
  }
  nav .menu-button-d {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.text};
    background-image: none;
    box-shadow: none;
    font-size: 1rem;
  }
  nav .menu-button-d:hover {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.secondary.main};
    box-shadow: none;
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

const filmDownload = {
  menuTitle: "دانلود فیلم",
  totalLink: "/category/film",
  items: [
    { title: "برترین فیلم ها", link: "/category/top-movies" },
    { title: "آرشیو کالکشن بهترین فیلم ها", link: "/category/best-movies" },
    { title: "250 فیلم برتر Imdb", link: "/category/top-250-imdb-movies" },
    { title: "250 فیلم برتر هندی", link: "/category/top-250-indian-movies" },
    { title: "فیلم های 2019", link: "/category/2019" },
    { title: "فیلم های 2020", link: "/category/2020" },
  ],
};
const seriesArchive = {
  menuTitle: "آرشیو سریال ها",
  totalLink: "/category/series",
  items: [
    { title: "برترین سریال ها", link: "/category/top-series" },
    { title: "250 سریال برتر Imdb", link: "/category/top-250-imdb-series" },
    { title: "سریال دوبله فارسی", link: "/category/dubbed-series" },
    { title: "سریال ایرانی", link: "/category/ir-series" },
    { title: "سریال خارجی", link: "/category/khareji-series" },
    { title: "سریال کره ای", link: "/category/corean-series" },
  ],
};

const MainLayout = ({ children, theme, toggleTheme }) => {
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();
  return (
    <>
      <HeaderContainer isLight={theme === "light" ? true : false}>
        <div className="row m-0 header-top-section align-items-center justify-content-around w-100 py-2">
          <div className="d-flex align-items-center">
            <LoginButton className="btn">{isMd && "ورود/ثبت نام"}</LoginButton>
            <Toggle
              className="d-none d-md-flex ml-2"
              theme={theme}
              toggleTheme={toggleTheme}
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
        </div>
        <nav className="d-none d-md-flex">
          <Button
            className="menu-button-d"
            text="صفحه اصلی"
            // onClick={() => console.log(menuData.totalLink)}
          />
          <DropDownMenu menuData={filmDownload} />
          <DropDownMenu menuData={seriesArchive} />
          <Button
            className="menu-button-d"
            text="سوالات متداول"
            // onClick={() => console.log(menuData.totalLink)}
          />
          <Button
            className="menu-button-d"
            text="تماس با ما"
            // onClick={() => console.log(menuData.totalLink)}
          />
        </nav>
      </HeaderContainer>
      {children}
    </>
  );
};

export default MainLayout;
