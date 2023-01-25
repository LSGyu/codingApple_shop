import React from "react";
import { Col } from 'react-bootstrap';

function Card(props) {
  return (
    <Col key={ props.id }>
      <img src={process.env.PUBLIC_URL + props.src } alt={ `shoe${ props.id }`} width="80%"/>
      <h4>{ props.title }</h4>
      <p>{ props.content }</p>
      <p>{ props.price }</p>
    </Col>
  )
}

export default Card;