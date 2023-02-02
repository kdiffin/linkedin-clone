import React from "react";
import "./css-files/InputOption.css";

function InputOption({ title, Icon, color, className }) {
  return (
    <div className={className}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
