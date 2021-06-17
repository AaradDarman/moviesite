import React, { useEffect, useState } from "react";
import { Icon, Button, FormGroup, InputGroup } from "@blueprintjs/core";
import styled from "styled-components";
import CollapseMenu from "./shared/CollapseMenu";
import { SwipeableDrawer } from "@material-ui/core";
import useBreakpoints from "../utils/useBreakPoints";
import Toggle from "./Toggler";
import { Link } from "react-router-dom";

const DrawerMenuIcon = styled(Icon)`
  cursor: pointer;
`;

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
  #mobile-nav-menu .bp3-form-group {
    padding: 5px 10px;
  }
  .nav-button {
    background-color: inherit;
    color: inherit;
    box-shadow: none;
    justify-content: flex-end;
    background-image: none;
    font-size: inherit;
    text-align: right;
    padding: 5px 10px;
  }
  .nav-button:hover {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.secondary.main};
    box-shadow: none;
  }
  .close-btn {
    cursor: pointer;
    margin-top: 0.8rem;
  }
  .bp3-form-group + div {
    padding: 5px 10px;
  }
  .bp3-input {
    background-color: ${({ theme }) => theme.isDark && theme.primary.light};
    color: ${({ theme }) => theme.isDark && theme.text};
    ::placeholder {
      color: ${({ theme }) => theme.isDark && theme.text};
    }
  }
  .bp3-icon.bp3-icon-search {
    color: ${({ theme }) => theme.isDark && theme.text};
  }
`;

const DrawerMenu = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { active } = useBreakpoints();
  useEffect(() => {
    closeDrawer();
  }, [active]);

  const closeDrawer = () => {
    setIsOpen(false);
  };
  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <div className="d-block d-md-none">
      <DrawerMenuIcon
        // className="d-block d-md-none"
        icon="menu"
        iconSize={30}
        onClick={openDrawer}
      />
      <SideDrawer
        className="d-block d-md-none"
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
        SwipeableDrawer={false}
      >
        <nav id="mobile-nav-menu">
          <Icon
            icon="cross"
            className="close-btn"
            iconSize={30}
            onClick={closeDrawer}
          />
          <FormGroup labelFor="text-input" className="m-0 rtl">
            <InputGroup
              id="search-input"
              placeholder="جست و جو ..."
              large
              leftElement={<Button minimal icon="search"></Button>}
            />
          </FormGroup>
          <div className="d-flex justify-content-between align-items-center">
            <Toggle theme={theme} toggle={toggleTheme} />
            <span>حالت شب و روز</span>
          </div>
          <Link className="nav-button" to="/" onClick={closeDrawer}>
            صفحه اصلی
          </Link>
          <CollapseMenu onLinkClick={closeDrawer} menuData={filmDownload} />
          <CollapseMenu onLinkClick={closeDrawer} menuData={seriesArchive} />
          <Link className="nav-button" onChange={closeDrawer} to="#">
            سوالات متداول
          </Link>
          <Link className="nav-button" onChange={closeDrawer} to="#">
            تماس با ما
          </Link>
        </nav>
      </SideDrawer>
    </div>
  );
};

export default DrawerMenu;
