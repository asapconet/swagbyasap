import React from "react";
import "../App.scss";

const Button = ({ onSubmit, className, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onSubmit}>
      {children}
    </button>
  );
};

export default Button;
