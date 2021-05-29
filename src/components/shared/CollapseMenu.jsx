import React, { useState } from "react";
import { Collapse, Pre, Button, MenuItem, Menu } from "@blueprintjs/core";
import styled from "styled-components";

const CollapseContainer = styled.div`
  background-color: ${({ theme, open }) => (open ? theme.primary.light : null)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  margin: 0;
  .bp3-collapse-body {
    padding-right: 5px;
  }
  .bp3-menu {
    padding-top: 0;
  }
  .bp3-menu,
  .bp3-button {
    background: inherit;
    color: inherit;
    text-align: right;
    justify-content: flex-end;
    box-shadow: none;
    font-size: inherit;
  }
  .bp3-button:hover,
  .bp3-menu-item:hover {
    color: ${({ theme }) => theme.secondary.main};
    background-color: inherit;
    box-shadow: none;
  }
`;

const CollapseMenu = ({ menuData }) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapseContainer open={open}>
      <Button onClick={() => setOpen(!open)}>{menuData.menuTitle}</Button>
      <Collapse isOpen={open}>
        <Menu>
          {menuData.items.map((item) => (
            <MenuItem href={item.link} text={item.title} />
          ))}
        </Menu>
      </Collapse>
    </CollapseContainer>
  );
};

export default CollapseMenu;
