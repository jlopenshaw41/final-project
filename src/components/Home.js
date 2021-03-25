import React from "react";
import homeLogo from "../../src/assets/homeLogo.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
        <img 
        className="Carbon-Lo-Logo"
        src={homeLogo}
        alt="Carbon-Lo logo">
      </img>
    </div>
  );
};

export default Home;
