import React, { useEffect, useState } from "react";
import styled, { withTheme, useTheme } from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";
import TabView from "./shared/TabView";
import { Button } from "@blueprintjs/core";

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

const SubTitle = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  .bp3-tab-list {
    display: none;
  }
  .bp3-tab-panel {
    margin: 0;
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  margin-right: auto;
  .bp3-button.active-tab {
    background-color: ${({ theme }) => theme.secondary.main};
    color: #fff;
  }
  .bp3-button.active-tab:hover {
    background-color: ${({ theme }) => theme.secondary.main};
  }
  .bp3-button:hover {
    background-color: ${({ theme }) => theme.primary.main};
  }
  .bp3-button {
    background-color: ${({ theme }) => theme.primary.main};
    background-image: none;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.text};
    border-radius: 1rem;
    transition: all 300ms ease-in-out;
    box-shadow: none;
  }
`;

const CategoriesComponent = ({ categories }) => {
  const Wraper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    direction: rtl;
    width: 100%;
    padding: 0;
    margin: 0;
  `;
  const Category = styled.li`
    padding: 0.3rem 0.5rem;
    text-align: right;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    &:hover {
      color: ${({ theme }) => theme.secondary.dark};
    }
  `;
  return (
    <Wraper>
      {categories.map((cat, index) => (
        <Category key={index} className="col-3">
          <a>{cat}</a>
        </Category>
      ))}
    </Wraper>
  );
};

const categoriesData = [
  {
    id: "asd",
    title: "فیلم",
    categories: [
      "اکشن",
      "انیمیشن",
      "بیوگرافی",
      "تاریخی",
      "ترسناک",
      "جنایی",
      "جنگی",
      "خانوادگی",
      "خبری",
      "درام",
      "عاشقانه",
      "علمی و تخیلی",
      "فانتزی",
      "فیلم نوآر",
      "کمدی",
      "کوتاه",
      "ماجراجویی",
      "مستند",
      "معمایی",
      "موزیک",
      "هیجان انگیز",
      "ورزشی",
      "وسترن",
    ],
  },
  {
    id: "sddgffds",
    title: "سریال",
    categories: [
      "اجتماعی",
      "اکشن",
      "انیمیشن",
      "بیوگرافی",
      "تاریخی",
      "ترسناک",
      "جنایی",
      "جنگی",
      "خانوادگی",
      "درام",
      "عاشقانه",
      "علمی و تخیلی",
      "فانتزی",
      "کمدی",
      "کوتاه",
      "ماجراجویی",
      "مستند",
      "معمایی",
      "موزیک",
      "هیجان انگیز",
      "ورزشی",
      "وسترن",
    ],
  },
];

const MovieCategory = () => {
  const [selectedTab, setSelectedTab] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const result = categoriesData.map((item) => ({
      ...item,
      panel: <CategoriesComponent key={item.id} categories={item.categories} />,
    }));
    setCategories(result);
    setSelectedTab(categoriesData[0].title);
  }, []);

  return (
    <BoxContainer className="mb-3 bp3-card">
      <TitleContainer>
        <TitleIcon iconUrl="images/theatre.svg" />
        <div className="d-flex flex-column rtl">
          <Title>تفکیک بر اساس ژانر</Title>
          <SubTitle>فیلم و سریال ها</SubTitle>
        </div>
        <ButtonWraper>
          {categoriesData.map((item) => (
            <Button
              className={selectedTab === item.title ? "active-tab" : null}
              onClick={() => setSelectedTab(item.title)}
            >
              {item.title}
            </Button>
          ))}
        </ButtonWraper>
      </TitleContainer>
      <Content>
        <TabView data={categories} selectedTabId={selectedTab} />
      </Content>
    </BoxContainer>
  );
};

export default MovieCategory;
