import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArticleAdd(props) {

  const inputArticleRef = useRef('');

  function add() {
    props.add(inputArticleRef.current.value);
  }

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <input className="form-control"
                  type="text" ref={inputArticleRef} />
        </div>
        <div className="col-4">
          <Button variant="primary" onClick={add}>
            <FontAwesomeIcon icon={faPlus} size="sm" />&nbsp;
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
}
