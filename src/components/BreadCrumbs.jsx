import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { LightenDarkenColor, hexToRGBA } from "../utils/colorConverter";
import useBreakpoints from "../utils/useBreakPoints";

const routes = [
  { path: "/", breadcrumb: "خانه" },
  { path: "/movie", breadcrumb: "فیلم" },
  { path: "/movie/top-movies", breadcrumb: "برترین فیلم ها" },
  { path: "/movie/best-movies", breadcrumb: "آرشیو کالکشن بهترین فیلم ها" },
  { path: "/movie/top-250-imdb-movies", breadcrumb: "250 فیلم برتر Imdb" },
  { path: "/movie/top-250-indian-movies", breadcrumb: "250 فیلم برتر هندی" },
  { path: "/movie/2019", breadcrumb: "فیلم های 2019" },
  { path: "/movie/2020", breadcrumb: "فیلم های 2020" },
  { path: "/movie/download", breadcrumb: null },
  { path: "/tv-show", breadcrumb: "سریال" },
  { path: "/tv-show/top-series", breadcrumb: "برترین سریال ها" },
  {
    path: "/tv-show/top-250-imdb-series",
    breadcrumb: "250 سریال برتر Imdb",
  },
  { path: "/tv-show/dubbed-series", breadcrumb: "سریال دوبله فارسی" },
  { path: "/tv-show/ir-series", breadcrumb: "سریال ایرانی" },
  { path: "/tv-show/khareji-series", breadcrumb: "سریال خارجی" },
  { path: "/tv-show/corean-series", breadcrumb: "سریال کره ای" },
  { path: "/tv-show/download", breadcrumb: null },
  { path: "*/page", breadcrumb: null },
  { path: "*/:pageNumber", breadcrumb: null },
];

const Wraper = styled.div`
  text-align: right;
  direction: rtl;
  padding: 1rem 0;
  display: flex;
  font-size: 0.87rem;
  .item {
    display: inline-block;
  }
  .item:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item:first-child a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item:first-child a::before {
    content: "";
    position: relative;
    top: -1px;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) =>
      theme.isDark ? LightenDarkenColor(theme.text, 70) : theme.text};
    margin-left: 5px;
    mask: url("/images/home.svg");
    display: inline-block;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: cover;
  }
  .item:not(.item:first-child)::before {
    content: "/";
    padding: 0 0.2rem;
  }
  .item a {
    color: ${({ theme }) => LightenDarkenColor(theme.text, 70)};
  }
  span.item:last-of-type a {
    color: ${({ theme }) => hexToRGBA(theme.text, 0.68)};
    pointer-events: none;
    cursor: default;
  }
`;
const Breadcrumbs = ({ breadcrumbs, ...others }) => {
  const { isXs } = useBreakpoints();
  return (
    <Wraper isXs={isXs} {...others}>
      {breadcrumbs.map(({ match, breadcrumb }) => {
        return (
          <span className="item" key={match.url}>
            <NavLink to={match.url}>{breadcrumb}</NavLink>
          </span>
        );
      })}
    </Wraper>
  );
};

export default withBreadcrumbs(routes)(Breadcrumbs);
