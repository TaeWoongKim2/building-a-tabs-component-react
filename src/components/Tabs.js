import React, { useState } from "react";

import styled from 'styled-components'

import Tab from './Tab';

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`

const TabContent = styled.div`
  /* ... */
`

const Tabs = ({ children }) => {
  const [ activeTab, setActiveTab ] = useState(children[0].props.label);

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <TabList>
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
      </TabList>
      <TabContent>
        {children.map((child) => (child.props.label === activeTab) ? child.props.children : null )}
      </TabContent>
    </div>
  );
};

export default Tabs;
