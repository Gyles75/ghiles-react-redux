export const ADD_ARTICLE    = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

export function add(value) {
  return {
    type:    ADD_ARTICLE,
    payload: value
  }
}

export function remove(index) {
  return {
    type:    REMOVE_ARTICLE,
    payload: index
  }
}
