import React from "react";

const ToolTip = ({ pos, text }) => {
  return (
    <button className="tooltip-btn" data-content={pos}>
      {text}
    </button>
  );
};

export default ToolTip;
