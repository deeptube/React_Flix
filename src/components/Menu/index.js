import React from "react";
import "./Menu.css";
import Untitled from "../../assets/Untitled.png";

//import ButtonLink from "../components/ButtonLink";
import Button from "../Button/index";

export default () => {
  return (
    <>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Untitled} alt="LogoMain" />
        </a>
        <Button className="ButtonLink" href="/">
          Novo video
        </Button>
      </nav>
    </>
  );
};
