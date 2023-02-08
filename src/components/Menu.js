import React, { useState } from "react";

const Menu = () => {
  const [selected, setSelected] = useState("Home");

  const handleClick = item => {
    setSelected(item);
  };

  return (
    <div style={containerStyle}>
      <ul style={listStyle}>
        <li
          style={selected === "Home" ? selectedStyle : itemStyle}
          onClick={() => handleClick("Home")}
        >
          Home
        </li>
        <li
          style={selected === "Services" ? selectedStyle : itemStyle}
          onClick={() => handleClick("Services")}
        >
          Services
        </li>
        <li
          style={selected === "News" ? selectedStyle : itemStyle}
          onClick={() => handleClick("News")}
        >
          News
        </li>
        <li
          style={selected === "Blog" ? selectedStyle : itemStyle}
          onClick={() => handleClick("Blog")}
        >
          Blog
        </li>
        <li
          style={selected === "Contact" ? selectedStyle : itemStyle}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

const containerStyle = {
  width: "100%",
  height: "100vh",
  background: "#191718",
  color: "#AAAAAA",
  fontWeight: "400",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: '1px solid #5C5C5C', 
};

const selectedStyle = {
  ...itemStyle,
  background: "#5C5C5C",
  color: "#FFF"
};

export default Menu;