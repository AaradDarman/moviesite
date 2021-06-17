import React, { useState } from "react";
import { Button, Menu } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
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
  .menu-button .bp3-icon {
    transform: ${({ menuState }) => (menuState ? "rotate(180deg)" : null)};
    transition: all 110ms ease-in-out;
    color: ${({ menuState, theme }) =>
      menuState ? theme.secondary.main : theme.text};
  }
`;

const DropDownMenu = ({ menuData, location }) => {
  const history = useHistory();
  const [isOpen, seIsOpen] = useState(false);

  const CMenu = ({ items }) => {
    return (
      <Menu>
        {items.map((item) => (
          <li>
            <Link
              className="bp3-menu-item rtl"
              to={item.link}
              onClick={() => seIsOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </Menu>
    );
  };

  return (
    <Container menuState={isOpen}>
      <Popover2
        menuState={isOpen}
        isOpen={isOpen}
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
          text={`آرشیو ${menuData.menuTitle}`}
          onClick={() => {
            history.push(menuData.totalLink);
            seIsOpen(false);
          }}
          onMouseEnter={() => seIsOpen(true)}
        />
      </Popover2>
    </Container>
  );
};

export default DropDownMenu;
