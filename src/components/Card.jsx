import React from "react";

const Card = ({ children, css }) => {
  return (
    <div
      className={`${css} bg-white
        shadow-lg rounded-xl p-7`}
    >
      {children}
    </div>
  );
};

export default Card;
