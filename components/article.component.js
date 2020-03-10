import React from 'react';
import ArticleAdd from './article-add.component';
import ArticleList from './article-list.component';

export default function ArticleComponent(props) {

  let articleListComponents = [];

  props.articleReducer.forEach((current, index) =>
    articleListComponents.push(<ArticleList index={index+1}
                                            value={props.articleReducer[index]}
                                            remove={props.articleActions.remove} />));

  return (
    <div className="container">
      <h1>Articles</h1><hr/>
      <ArticleAdd add={props.articleActions.add} /><br/>
      { articleListComponents }
    </div>
  );
}
