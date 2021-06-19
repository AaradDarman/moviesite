import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import Movie from "./Movie";
import { paginate } from "../utils/paginate";
import useBreakpoints from "../utils/useBreakPoints";

const Wraper = styled.div`
  .pagination {
    direction: rtl;
    background-color: ${({ theme }) => theme.primary.light};
    padding: 0.5rem 0;
  }
  .pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary.main};
    width: 35px;
    height: 35px;
    border-radius: 100%;
    padding: 0;
    margin-right: 5px;
    box-shadow: 1px 2px 3px rgb(25 25 27 / 61%);
    transition: all 200ms ease-in-out;
  }
  li.disabled {
    display: none;
  }
  .pagination .active {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme.isDark ? theme.primary.main : theme.text)};
  }
  .pagination a {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Movies = ({ items, onPageChange = () => {}, totalItems }) => {
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const match = useRouteMatch();

  const handlePageChange = (data) => {
    let selected = data.selected;
    setCurrentPage(selected + 1);
    onPageChange(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log("on match");
    setCurrentPage(1);
  }, [match.params.category]);

  const { isLg } = useBreakpoints();

  const archiveMovies = paginate(items, currentPage, perPage);
  return (
    <Wraper>
      {archiveMovies.map((movie) => (
        <Movie key={movie._id} film={movie} />
      ))}
      <ReactPaginate
        previousLabel={<i class="fas fa-angle-double-right"></i>}
        nextLabel={<i class="fas fa-angle-double-left"></i>}
        breakLabel={"..."}
        forcePage={currentPage - 1}
        breakClassName={"break-me"}
        pageCount={Math.ceil(totalItems / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={isLg ? 10 : 4}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Wraper>
  );
};

export default Movies;
