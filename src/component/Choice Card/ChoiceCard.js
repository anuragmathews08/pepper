import React from "react";
import classes from "./ChoiceCard.module.css";

const ChoiceCard = (props) => {
    let select = [classes.type__eventCard];
    if(props.selected) {
        select.push(classes.selected);
    }
  return (
    <>
      <div className={select.join(" ")} onClick={props.click}>
        <img src={props.img} alt={props.desc} />
        <h3>{props.title}</h3>
      </div>
    </>
  );
};

export default ChoiceCard;
