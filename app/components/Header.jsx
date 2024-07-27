import React from "react";

const Header = ({ head, fontSize }) => {
  return (
    <div>
      <p
        className={`text-${fontSize}xl font-bold mb-8 inline-block relative overflow-hidden`}
        style={{
          background: "linear-gradient(to right, #EC4899 0%, #8B5CF6 100%)",
          backgroundSize: "80% 40%", // Increases the gradient's area, making the transition smaller
          backgroundRepeat: "no-repeat",
          paddingRight: "1.6rem",
          backgroundPosition: "right bottom",
        }}
      >
        {head}
      </p>
    </div>
  );
};

export default Header;
