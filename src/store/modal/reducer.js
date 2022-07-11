import { CHANGE_ACTIVE } from "./types"

const initialState = {
     activeID: 0
}

function modal(state = initialState, action) {
     switch(action.type) {
          case CHANGE_ACTIVE: {
               if (state.activeID === parseInt(action.payload)) {
                    return {
                         activeID: 0
                    }
               } else {
                    return {
                         activeID: parseInt(action.payload)
                    }
               }
          }
          default: {
               return state
          }
     }
}

export default modal;