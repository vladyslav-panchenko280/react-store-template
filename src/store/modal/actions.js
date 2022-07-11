import { CHANGE_ACTIVE } from "./types";

export function changeActive(event) {
     return {
          type: CHANGE_ACTIVE,
          payload: event.target.dataset.id
     }
}