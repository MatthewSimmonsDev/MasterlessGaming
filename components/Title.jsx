import React from "react";
import Logo from "../assets/logo/remove_link.png";
const Title = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mt-16">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        MASTERLESS GAMING &nbsp;
        <img className="inline" src={Logo} alt="logo" />
      </h1>
    </div>
  );
};

export default Title;
