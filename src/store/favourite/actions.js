import { TOGGLE_FAV } from "./types";

export function toggleFav(event, data) {
     return {
          type: TOGGLE_FAV,
          payload: event.target.dataset.id,
          extra: data
     }
}