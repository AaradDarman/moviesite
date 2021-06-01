import React from "react";
import {
  Alignment,
  Classes,
  H3,
  H5,
  InputGroup,
  Navbar,
  Switch,
  Tab,
  TabId,
  Tabs,
} from "@blueprintjs/core";

const TabView = ({ data, selectedTabId, onChange, ...other }) => {
  return (
    <Tabs
      // animate={this.state.animate}
      id="TabsExample"
      // key={this.state.vertical ? "vertical" : "horizontal"}
      // renderActiveTabPanelOnly={this.state.activePanelOnly}
      // vertical={this.state.vertical}
      selectedTabId={selectedTabId}
      onChange={onChange}
      {...other}
    >
      {data.map((item) => (
        <Tab id={item.title} title={item.title} panel={item.panel} />
      ))}
    </Tabs>
  );
};

export default TabView;
