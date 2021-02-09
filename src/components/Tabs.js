import React, { useState } from "react";

import Tab from "./Tab";


const Tabs = (props) => {
  const { children } = props;

  const [ activeTab, setActiveTab ] = useState(children[0].props.label);

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              label={label}
              activeTab={activeTab}
              key={label}
              onClick={handleClickTab}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => (child.props.label === activeTab) ? child.props.children : null )}
      </div>
    </div>
  );
};

export default Tabs;
