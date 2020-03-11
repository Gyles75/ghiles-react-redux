import React from 'react';
import { Button } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArticleList(props) {

  function remove() {
    props.remove(props.index - 1);
  }

  return (
    <div>
      <strong>{ props.index }.</strong> { props.value }&nbsp;
      <Button variant="default" size="sm" onClick={remove}>
        <FontAwesomeIcon icon={faTrash} size="sm" />
      </Button>
    </div>
  );
}
