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

// class Tab extends Component {
//   static propTypes = {
//     activeTab: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };

//   onClick = () => {
//     const { label, onClick } = this.props;
//     onClick(label);
//   };

//   render() {
//     const {
//       onClick,
//       props: { activeTab, label },
//     } = this;

//     let className = "tab-list-item";

//     if (activeTab === label) {
//       className += " tab-list-active";
//     }

//     return (
//       <li className={className} onClick={onClick}>
//         {label}
//       </li>
//     );
//   }
// }

export default Tab;
