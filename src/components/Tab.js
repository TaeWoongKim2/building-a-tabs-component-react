import React from "react";

const Tab = ({
  activeTab,
  label,
  onClick,
}) => {

  const className = `tab-list-item ${(activeTab === label) ? 'tab-list-active' : null}`;

  return (
    <li className={className} onClick={() => onClick(label)}>
      {label}
    </li>
  )
};

export default Tab;
