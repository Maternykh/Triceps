import React from "react";
import Itemshow from "./Itemshow";
import { BsArrowLeft } from "react-icons/bs";
const Salatbluds = (props) => {
  return (
    <>
      <div className="hide" onClick={props.hide}>
        <BsArrowLeft className="arrow-icon" />
      </div>
      {props.resept.map((el, index) => {
        if (el.categ === "салаты") {
          return <Itemshow item={el} key={index} />;
        }
      })}
    </>
  );
};

export default Salatbluds;
