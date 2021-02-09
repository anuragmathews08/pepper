import * as actionTypes from "../actions/actionTypes";

const initialState = {
  eventList: {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_EVENT:
      let obj = action.initEvents;
      let tempObj = {...state.eventList};
      for (let key in obj) {
        tempObj = {
          ...tempObj,
          [key]: [...obj[key]]
        };
      };
      return {
        ...state,
        eventList: {
          ...tempObj
        }
      };

    case actionTypes.STORE_EVENT:
      let month = action.eventDetails.eventMonth;
      return {
        ...state,
        eventList: {
          ...state.eventList,
          [month]: [...state.eventList[month], action.eventDetails],
        },
      };

    case actionTypes.DEL_EVENT:
      let delEventMonth = action.month;
      let title = action.title;
      let monthArray = [...state.eventList[delEventMonth]];
      let newList = monthArray.filter((el) => el.eventTitle !== title);
      return {
        ...state,
        eventList: {
          ...state.eventList,
          [delEventMonth]: newList,
        },
      };

    default:
      return state;
  }
};

export default reducer;
