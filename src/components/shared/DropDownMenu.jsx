import React, { useState } from "react";

import { Button, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import styled from "styled-components";

const MyPopover = styled(Popover2)`
  .menu-button {
    background-color: ${({ theme }) => theme.primary.main};
    background-image: none;
    box-shadow: none;
    font-size: 1rem;
    color: ${({ menuState, theme }) =>
      menuState ? theme.secondary.main : theme.text};
  }
  .menu-button:hover {
    background-color: ${({ theme }) => theme.primary.main};
    box-shadow: none;
  }
  .bp3-icon {
    transform: ${({ menuState }) => (menuState ? "rotate(180deg)" : null)};
    transition: all 110ms ease-in-out;
    color: ${({ menuState, theme }) =>
      menuState ? theme.secondary.main : theme.text};
  }
`;

const MyMenu = styled(Menu)`
  background: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.text};
  text-align: right;
  li:hover {
    color: ${({ theme }) => theme.secondary.dark};
  }
`;

const CMenu = ({ items }) => {
  return (
    <MyMenu>
      {items.map((item) => (
        <MenuItem href={item.link} text={item.title} />
      ))}
    </MyMenu>
  );
};

const DropDownMenu = ({ menuData }) => {
  const [isOpen, seIsOpen] = useState(false);
  return (
    <MyPopover
      menuState={isOpen}
      onOpened={() => seIsOpen(true)}
      onClose={() => seIsOpen(false)}
      modifiers={{ arrow: { enabled: false } }}
      interactionKind="hover"
      content={<CMenu items={menuData.items} />}
      placement="bottom-end"
      transitionDuration={100}
    >
      <Button
        icon={"chevron-down"}
        className="menu-button"
        text={menuData.menuTitle}
        onClick={() => console.log(menuData.totalLink)}
      />
    </MyPopover>
  );
};

export default DropDownMenu;
