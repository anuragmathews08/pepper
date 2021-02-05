import { db } from "../../firebase";
import firebase from "firebase";

export const ON_BIRTHDAY = "ON_BIRTHDAY";
export const ON_ANNIVERSARY = "ON_ANNIVERSARY";

export const SET_TITLE = "SET_TITLE";
export const SET_MONTH = "SET_MONTH";
export const SET_DATE = "SET_DATE";

export const STORE_EVENT = "STORE_EVENT";
export const DEL_EVENT = "DEL_EVENT";

export const INIT_EVENT = "INIT_EVENT";

export const initEvents = (events) => {
  return {
    type: INIT_EVENT,
    initEvents: events,
  };
};

export const onBirthday = () => {
  return {
    type: ON_BIRTHDAY,
  };
};

export const onAnniversary = () => {
  return {
    type: ON_ANNIVERSARY,
  };
};

export const setTitle = (evtitle) => {
  return {
    type: SET_TITLE,
    title: evtitle,
  };
};

export const setMonth = (evMonth) => {
  return {
    type: SET_MONTH,
    month: evMonth,
  };
};

export const setDate = (evDate) => {
  return {
    type: SET_DATE,
    date: evDate,
  };
};

const saveEventDetails = (evDetails) => {
  return {
    type: STORE_EVENT,
    eventDetails: evDetails,
  };
};

export const storeEvent = (evDetails) => {
  let month = evDetails.eventMonth;
  return (dispatch) => {
    db.collection("events")
      .doc("anuragmathews007@gmail.com")
      .set(
        {
          [month]: firebase.firestore.FieldValue.arrayUnion(evDetails),
        },{
          merge: true
        }
      )
      .then(() => dispatch(saveEventDetails(evDetails)))
      .catch((error) => console.log(error));
  };
};

const deleteEvent = (evTitle, evMonth) => {
  return {
    type: DEL_EVENT,
    title: evTitle,
    month: evMonth,
  };
};

export const delEvent = (evTitle, evMonth, eList) => {
  let newArray = [...eList[evMonth]];
  let tempArr = newArray.filter((el) => el.eventTitle !== evTitle);
  return (dispatch) => {
    db.collection("events")
      .doc("anuragmathews007@gmail.com")
      .update({
        [evMonth]: [...tempArr],
      })
      .then(() => dispatch(deleteEvent(evTitle, evMonth)))
      .catch((err) => console.log(err));
  };
};
