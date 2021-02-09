import React from "react";
import classes from "./EventCard.module.css";
import CakeIconWhite from "../../assets/icons/cake-white.svg";
import RingIconWhite from "../../assets/icons/wedding-ring.svg";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';


const EventCard = (props) => {
  let eventIcon =
    props.type === "Birthday" ? (
      <img src={CakeIconWhite} alt="Birthday cake icon" />
    ) : (
      <img src={RingIconWhite} alt="Ring icon" />
    );

    
  return (
    <div className={classes.cardBlock}>
      <div className={classes.cardBlock__eventIcon}>{eventIcon}</div>

      <div className={classes.cardBlock__eventDetails}>
        <div className={classes.eventDetails__name}>
          <h4>{props.title}</h4>
        </div>

        <div className={classes.eventDetails__date}>
          <p>
            Date :{" "}
            <span className={classes.eventDetails__highlight}>
              {props.date} {props.month}
            </span>
          </p>
        </div>

        <div className={classes.cardBlock__deleteIcon} onClick={() => props.delEvent(props.title, props.month, props.eList, props.uId)}>
          <DeleteForeverOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eList: state.evList.eventList,
    uId: state.userDetails.user.userID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delEvent: (title, month, list, docId) => dispatch(actionCreators.delEvent(title,month,list, docId))
  };
};
 
export default connect(mapStateToProps,mapDispatchToProps)(EventCard);
