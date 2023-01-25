import React from "react";

import { Row, Col } from 'react-bootstrap';

function Cards(props) {

  const shoes = props.shoesData;

  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + '/bg.png'} alt='main' height="300px" width="100%"/> {/* process.env.PUBLIC_URL 사이트 경로 */}
      </div>
      {/* <div className='main-big' style={{ backgroundImage : 'url(import 한 이름)'}}></div> css가 아닌 컴포넌트에서 사진 가져오는 방법*/}
      <Row>
        {
          shoes.map((shoe) => {
            return (
              <Card id={ shoe.id } src={ shoe.src } title={ shoe.title } content={ shoe.content } price={ shoe.price }/>
            )
          })
        }
      </Row>
    </>
  )
}

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

export default Cards;