import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";
// import { ToolTip } from "../../components/tooltip";

import style from "./style.module.scss";

interface TabProps {
  title: string;
  icon: string;
  activeTabIcon: string;
  path: string;
  disabled: boolean;
}

export const Tab = ({
  title,
  icon,
  activeTabIcon,
  path,
  disabled,
}: TabProps) => {
  const history = useHistory();
  const location = useLocation();

  const isActive = path === location.pathname;

  return (
    <div
      id={title}
      className={`${style.tab} ${
        isActive ? style.active : disabled ? style.disabled : null
      }`}
      onClick={() => {
        if (!disabled) history.push(path);
      }}
    >
      <img src={isActive ? activeTabIcon : icon} alt="tab" />
      <div className={style.title}>{title}</div>
      {disabled && (
        <UncontrolledTooltip placement="top" target={title}>
          Coming Soon
        </UncontrolledTooltip>
      )}
    </div>
  );
};
