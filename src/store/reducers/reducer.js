import * as actionTypes from '../actions/actions';

const initialState = {
    eventDetails: {
        eventType: "",
        eventTitle: "",
        eventMonth: "",
        eventDate: ""
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ONBIRTHDAY:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventType: "Birthday"
                }
            }
        
        case actionTypes.ONANNIVERSARY:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventType: "Anniversary"
                }
            }
        
        case actionTypes.SETTITLE: 
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventTitle: action.title
                }
            }

        case actionTypes.SETMONTH:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventMonth: action.month
                }
            }

        case actionTypes.SETDATE:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventDate: action.date
                }
            }

         default:
             return state;   
    }
    
};

export default reducer;