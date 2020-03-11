import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleActions from '../actions/article.actions';
import ArticleComponent from '../components/article.component';

let propsMapping = (store) => ({
  articleReducer: store.articleReducer
});

let dispatchMapping = (dispatch) => ({
  articleActions: bindActionCreators(ArticleActions, dispatch)
});

let ArticleContainer = connect(
  propsMapping,
  dispatchMapping
)(ArticleComponent);

export default ArticleContainer;