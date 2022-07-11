import { CHANGE_AUTHENTICATION } from "./types";

const initialState = {
     authentication: false
};

const authentication = (state = initialState, action) => {
     switch (action.type) {
          case CHANGE_AUTHENTICATION: {
               return {
                    ...state,
                    authentication: !state.authentication
               }
          }
          default: {
               return state;
          }
     }
}

export default authentication;