import React from "react";
import styled from "styled-components";

import Toggle from "../Toggler";

const HeaderContainer = styled.header`
  display: block;
  width: 100%;
`;
const MainLayout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <HeaderContainer isLight={theme === "light" ? true : false}>
        <div className="row m-0 header-top-section align-items-center justify-content-around w-100 py-2">
          <div className="d-flex align-items-center">
            <Toggle
              className="d-none d-md-flex ml-2"
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>
        </div>
      </HeaderContainer>
      {children}
    </>
  );
};

export default MainLayout;
