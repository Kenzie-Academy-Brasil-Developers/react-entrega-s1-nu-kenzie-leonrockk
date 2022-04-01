import "./style.css";
import React, { useState } from "react";
import List from "../List";

export default function Button({ children, listTransactions }) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <button
      onClick={() => {
        handleToggle();
      }}
      className={!isActive ? "filtroButtonChecked" : "filtroButtonUnchecked"}
    >
      {children}
    </button>
  );
}
