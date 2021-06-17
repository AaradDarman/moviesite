import React from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

import DropDownMenu from "./shared/DropDownMenu";

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
    </NavContainer>
  );
};

export default NavigationMenu;
