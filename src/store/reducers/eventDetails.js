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
        case actionTypes.ON_BIRTHDAY:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventType: "Birthday"
                }
            }
        
        case actionTypes.ON_ANNIVERSARY:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventType: "Anniversary"
                }
            }
        
        case actionTypes.SET_TITLE: 
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventTitle: action.title
                }
            }

        case actionTypes.SET_MONTH:
            return {
                ...state,
                eventDetails: {
                    ...state.eventDetails,
                    eventMonth: action.month
                }
            }

        case actionTypes.SET_DATE:
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