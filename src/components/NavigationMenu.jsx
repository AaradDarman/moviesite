import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

import DropDownMenu from "./shared/DropDownMenu";

const filmDownload = {
  menuTitle: "فیلم",
  totalLink: "/movie",
  items: [
    { title: "برترین فیلم ها", link: "/movie/top-movies" },
    { title: "آرشیو کالکشن بهترین فیلم ها", link: "/movie/best-movies" },
    { title: "250 فیلم برتر Imdb", link: "/movie/top-250-imdb-movies" },
    { title: "250 فیلم برتر هندی", link: "/movie/top-250-indian-movies" },
    { title: "فیلم های 2019", link: "/movie/2019" },
    { title: "فیلم های 2020", link: "/movie/2020" },
  ],
};
const seriesArchive = {
  menuTitle: "سریال",
  totalLink: "/tv-show",
  items: [
    { title: "برترین سریال ها", link: "/tv-show/top-series" },
    { title: "250 سریال برتر Imdb", link: "/tv-show/top-250-imdb-series" },
    { title: "سریال دوبله فارسی", link: "/tv-show/dubbed-series" },
    { title: "سریال ایرانی", link: "/tv-show/ir-series" },
    { title: "سریال خارجی", link: "/tv-show/khareji-series" },
    { title: "سریال کره ای", link: "/tv-show/corean-series" },
  ],
};

const NavContainer = styled.div`
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


const NavigationMenu = () => {
  return (
    <NavContainer>
      <nav className="d-none d-md-flex">
        <Link to="/" className="bp3-button menu-button-d">
          صفحه اصلی
        </Link>
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
    </NavContainer>
  );
};

export default NavigationMenu;
