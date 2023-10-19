import React from "react";
import Itemshow from "./Itemshow";
import { BsArrowLeft } from "react-icons/bs";
const Hotblud = (props) => {
  return (
    <>
      <div className="hide" onClick={props.hide}>
        <BsArrowLeft className="arrow-icon" />
      </div>
      {props.resept.map((el, index) => {
        if (el.categ === "горячее") {
          return <Itemshow item={el} key={index} />;
        }
      })}
    </>
  );
};

export default Hotblud;
