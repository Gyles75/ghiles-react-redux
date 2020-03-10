import { ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/article.actions';

let initialState = [
    'Mon premier article',
    'Mon autre article',
    'Vive REDUX !!'
];

export default function ArticleReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];

    case REMOVE_ARTICLE:
      return [...state].filter((current, index) => index !== action.payload);

    default:
      return state;
  }
}
