import React from "react";

const ToolTip = ({ pos, text }) => {
  return (
    <button
      className="tooltip-btn"
      data-content={pos}
      onMouseEnter={(e) => {
        e.currentTarget.classList.add("show");
      }}
      onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
    >
      {text}
    </button>
  );
};

export default ToolTip;
