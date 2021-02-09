import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {
        userName: "",
        PhoneNumber: "",
        userEmail: "",
        userID: ""
    }
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.name,
                    userEmail: action.email,
                    userID: action.uid,
                    PhoneNumber: action.num
                }
            };

        case actionTypes.SIGN_OUT:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: "",
                    userEmail: "",
                    userID: "",
                    PhoneNumber: ""
                },
            };
            
        case actionTypes.SET_NUMBER:
            return {
                ...state,
                user: {
                    ...state.user,
                    PhoneNumber: action.num
                }
            };
         
        case actionTypes.SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.uName,
                    userEmail: action.uEmail,
                    userID: action.uID,
                    PhoneNumber: action.phoneNum
                }
            };    

        default:
            return state;    
    }
};

export default reducer;