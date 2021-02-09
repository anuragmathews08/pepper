import { db } from "../../firebase";
import firebase from "firebase";
import * as actionTypes from "./actionTypes";
import { auth, provider } from "../../firebase";

export const initEvents = (events) => {
  return {
    type: actionTypes.INIT_EVENT,
    initEvents: events,
  };
};

export const onBirthday = () => {
  return {
    type: actionTypes.ON_BIRTHDAY,
  };
};

export const onAnniversary = () => {
  return {
    type: actionTypes.ON_ANNIVERSARY,
  };
};

export const setTitle = (evtitle) => {
  return {
    type: actionTypes.SET_TITLE,
    title: evtitle,
  };
};

export const setMonth = (evMonth) => {
  return {
    type: actionTypes.SET_MONTH,
    month: evMonth,
  };
};

export const setDate = (evDate) => {
  return {
    type: actionTypes.SET_DATE,
    date: evDate,
  };
};

export const setUserPhone = (uNum) => {
  return {
    type: actionTypes.SET_NUM,
    num: uNum,
  };
};

const saveEventDetails = (evDetails) => {
  return {
    type: actionTypes.STORE_EVENT,
    eventDetails: evDetails,
  };
};

export const storeEvent = (evDetails, docId) => {
  let month = evDetails.eventMonth;
  return (dispatch) => {
    db.collection("events")
      .doc(docId)
      .set(
        {
          [month]: firebase.firestore.FieldValue.arrayUnion(evDetails),
        },
        {
          merge: true,
        }
      )
      .then(() => dispatch(saveEventDetails(evDetails)))
      .catch((error) => console.log(error));
  };
};

const deleteEvent = (evTitle, evMonth) => {
  return {
    type: actionTypes.DEL_EVENT,
    title: evTitle,
    month: evMonth,
  };
};

export const delEvent = (evTitle, evMonth, eList, docId) => {
  let newArray = [...eList[evMonth]];
  let tempArr = newArray.filter((el) => el.eventTitle !== evTitle);
  return (dispatch) => {
    db.collection("events")
      .doc(docId)
      .update({
        [evMonth]: [...tempArr],
      })
      .then(() => dispatch(deleteEvent(evTitle, evMonth)))
      .catch((err) => console.log(err));
  };
};

const usrLogin = (usrName, uEmail, uID, number) => {
  return {
    type: actionTypes.LOGIN_USER,
    name: usrName,
    email: uEmail,
    uid: uID,
    num: number,
  };
};


const setUserAction = (name,mail,id,pNum) => {
  return {
    type: actionTypes.SET_USER,
    uName: name,
    uEmail: mail,
    uID : id,
    phoneNum: pNum
  };
};

export const setUser = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let uName = user.displayName;
        let uMail = user.email;
        let uId = user.uid;
        let uNum = user.phoneNumber;
        dispatch(setUserAction(uName, uMail, uId, uNum));
      }
    });
  };
};

export const userLoginGoogle = () => {
  return (dispatch) => {
    if(window.innerWidth > 580) {
      auth
      .signInWithPopup(provider)
      .then((response) => {
        let usrName = response.user.displayName;
        let uEmail = response.user.email;
        let uID = response.user.uid;
        let phoneNum = response.user.phoneNumber;
        dispatch(usrLogin(usrName, uEmail, uID, phoneNum));
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      auth
      .signInWithRedirect(provider)
      .then((response) => {
        let usrName = response.user.displayName;
        let uEmail = response.user.email;
        let uID = response.user.uid;
        let phoneNum = response.user.phoneNumber;
        dispatch(usrLogin(usrName, uEmail, uID, phoneNum));
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  };
};

const usrSignOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};

export const userSignOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(usrSignOut());
      })
      .catch((error) => console.log(error));
  };
};

const userNum = (number) => {
  return {
    type: actionTypes.SET_NUMBER,
    num: number,
  };
};

export const updateNumber = (number) => {
  return (dispatch) => {
    const user = auth.currentUser;
    user
      .updatePhoneNumber(number)
      .then(() => {
        dispatch(userNum(number));
      })
      .catch((error) => console.log(error));
  };
};
