import React, { useState } from "react";
import { Collapse, Button, Menu } from "@blueprintjs/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const CollapseMenu = ({ menuData, onLinkClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapseContainer>
      <Button onClick={() => setOpen(!open)}>{menuData.menuTitle}</Button>
      <Collapse keepChildrenMounted={true} isOpen={open}>
        <Menu>
          {menuData.items.map((item) => (
            <li>
              <Link
                onClick={onLinkClick}
                className="bp3-menu-item rtl"
                to={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </Menu>
      </Collapse>
    </CollapseContainer>
  );
};

export default CollapseMenu;
