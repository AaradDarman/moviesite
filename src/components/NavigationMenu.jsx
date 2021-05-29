import React, { useState } from "react";
import styled from "styled-components";
import { Button, Icon, FormGroup, InputGroup } from "@blueprintjs/core";
import { SwipeableDrawer } from "@material-ui/core";
import DropDownMenu from "./shared/DropDownMenu";
import CollapseMenu from "./shared/CollapseMenu";

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

const SideDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.text};
    padding: 0 0.5rem;
  }
  nav#mobile-nav-menu {
    display: flex;
    flex-direction: column;
    min-width: 210px;
    background-color: inherit;
    color: inherit;
    box-shadow: none;
    font-size: 1rem;
  }
  .nav-button {
    background-color: inherit;
    color: inherit;
    box-shadow: none;
    justify-content: flex-end;
    background-image: none;
    font-size: inherit;
  }
  .nav-button:hover {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.secondary.main};
    box-shadow: none;
  }
`;

const NavigationMenu = ({ drawerState, open, close }) => {
  return (
    <>
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
      <SideDrawer
        className="d-block d-md-none"
        anchor="right"
        open={drawerState}
        onClose={close}
        onOpen={open}
      >
        <nav id="mobile-nav-menu">
          <Button className="nav-button" text="صفحه اصلی" />
          <CollapseMenu menuData={filmDownload} />
          <CollapseMenu menuData={seriesArchive} />
          <Button className="nav-button" text="سوالات متداول" />
          <Button className="nav-button" text="تماس با ما" />
        </nav>
      </SideDrawer>
    </>
  );
};

export default NavigationMenu;
