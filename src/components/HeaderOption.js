import React from "react";
import "./css-files/HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__iconavatar" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
