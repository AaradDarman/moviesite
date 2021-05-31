import React from "react";
import styled, { useTheme } from "styled-components";
import useBreakpoints from "../utils/useBreakPoints";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  margin: 0 ${({ isLg }) => (isLg ? "-3rem" : "-1rem")};
  direction: rtl;
  i {
    font-size: 2rem;
  }
`;

const Hashtag = styled.a`
  padding: 0.3rem 1rem;
  margin: 0 0.3rem 0.3rem 0;
  color: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 0.3rem;
  opacity: 0.8;
  font-size: 0.85rem;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: #111120;
    color: ${({ isDark }) => (!isDark ? "#fff" : null)};
  }
`;

const Footer = () => {
  const breakpoints = useBreakpoints();
  const appTheme = useTheme();

  return (
    <Container {...breakpoints}>
      <i className="fa fa-hashtag"></i>
      <Hashtag {...appTheme}>آوا مووی</Hashtag>
      <Hashtag {...appTheme}>دانلود انیمیشن</Hashtag>
      <Hashtag {...appTheme}>دانلود رايگان فيلم</Hashtag>
      <Hashtag {...appTheme}>دانلود رایگان انیمیشن</Hashtag>
      <Hashtag {...appTheme}>دانلود رایگان فیلم</Hashtag>
    </Container>
  );
};

export default Footer;
