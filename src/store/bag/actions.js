import {
     ADD_TO_BAG,
     REMOVE_FROM_BAG,
     CLEAR_BAG
} from "./types";

export function addToBag(event, data) {
     return {
          type: ADD_TO_BAG,
          payload: event.target.dataset.id,
          extra: data
     }
}

export function removeFromBag(event, data) {
     return {
          type: REMOVE_FROM_BAG,
          payload: event.target.dataset.id,
          extra: data
     }
}

export function clearBag() {
     return {
          type: CLEAR_BAG
     }
}
