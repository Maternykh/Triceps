import React, { useState } from "react";
const Itemshow = (props) => {
  const [desc, setIsDesc] = useState(false);
  const showdesc = (event) => {
    setIsDesc((current) => !current);
  };
  return (
    <div className="Itemshow">
      <div className="item-cont">
        <div className="item-image">
          <img src={props.item.image} className="item-img" />
        </div>
        <div className="full-desc">
          <div className="strok">
            <div className="itemshow-title">{props.item.title}</div>
            <div className="itemshow-title">{props.item.time}МИН</div>
            <div className="itemshow-title">{props.item.diff}</div>
          </div>
          <div className="full" onClick={showdesc}>
            Подробнее
          </div>
          {desc && <div className="full-desc">{props.item.desc}</div>}
        </div>
      </div>
    </div>
  );
};

export default Itemshow;
