import React from "react";

import styled from 'styled-components'

const TabListItem = styled.li(props => ({
  display: 'inline-block',
  listStyle: 'none',
  marginBottom: '-1px',
  padding: '0.5rem 0.75rem',
  border: `${props.active ? 'solid #ccc' : 'none'}`,
  borderWidth: `${props.active ? '1px 1px 0 1px' : 'none'}`,
  backgroundColor: `${props.active ? '#fff' : 'none'}`,
}));

const Tab = ({
  activeTab,
  label,
  onClick,
}) => {
  const active = `${(activeTab === label) ? true : false}`;

  return (
    <TabListItem active={active} onClick={() => onClick(label)}>
      {label}
    </TabListItem>
  )
};

export default Tab;
