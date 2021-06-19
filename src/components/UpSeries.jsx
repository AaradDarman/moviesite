import React from "react";
import styled, { withTheme, useTheme } from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

const BoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary.light};
  color: inherit;
  padding: 1rem 0 0 0;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1rem;
`;

const TitleIcon = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.accent};
  mask: url(${({ iconUrl }) => iconUrl});
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
  margin-left: 10px;
`;

const Title = styled.p`
  margin: 0;
`;
const SeeMore = styled.a`
  margin: 0;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary.main};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
`;

const Item = ({ item }) => {
  const appTheme = useTheme();
  const Container = styled.a`
    position: relative;
    margin: 0 0 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid ${({ theme }) => theme.text};
    overflow: hidden;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      margin: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding-right: 4px;
      line-height: 30px;
      text-align: right;
      color: ${({ theme }) => (theme.isDark ? theme.text : "#fff")};
      background: rgb(26, 26, 31);
      background: linear-gradient(
        0deg,
        rgba(26, 26, 31, 1) 0%,
        rgba(26, 27, 31, 0.8155637254901961) 42%,
        rgba(26, 26, 31, 0.12648809523809523) 100%
      );
    }
  `;

  const useStyles = makeStyles({
    arrow: {
      color: appTheme.primary.light,
    },
    tooltip: {
      backgroundColor: appTheme.primary.light,
      color: appTheme.text,
      direction: "rtl",
      fontFamily: "BYekan",
      fontSize: "0.8rem",
      boxShadow:
        "0 0 0 1px rgb(16 22 26 / 15%), 0 0 0 rgb(16 22 26 / 0%), 0 0 0 rgb(16 22 26 / 0%);",
    },
  });

  const classes = useStyles();

  return (
    <Tooltip
      classes={classes}
      title={`دانلود سریال ${item.title}`}
      arrow
      placement="right"
    >
      <Container href="">
        <img src={item.imageUrl} alt={item.title} />
        <p> {item.updateText}</p>
      </Container>
    </Tooltip>
  );
};

const UpSeries = ({ iconUrl, title, items, theme }) => {
  return (
    <BoxContainer className="mb-3 bp3-card">
      <TitleContainer>
        <TitleIcon iconUrl={iconUrl} />
        <Title>{title}</Title>
        <SeeMore>مشاهده همه</SeeMore>
      </TitleContainer>
      <Content>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Content>
    </BoxContainer>
  );
};

export default withTheme(UpSeries);
