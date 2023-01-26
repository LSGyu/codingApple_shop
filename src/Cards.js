import React, { useState } from "react";
import axios from "axios";
import data from './data.js';

import { Row, Col } from 'react-bootstrap';

function Cards() {

  const [shoes, setShoes] = useState(data);

  function getNewShoes() {
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((data) => {
      let dumpArray = [...shoes, ...data.data];
      setShoes(dumpArray);
    });

    /*
    fetch(url)
    .then(결과 => json, array변환)
    .then(() => {});
    */
  }

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
      <button onClick={() => { getNewShoes() }}>버튼</button>
    </>
  )
}

function Card(props) {
  return (
    <Col key={ props.id }>
      <h4>{ props.title }</h4>
      <p>{ props.content }</p>
      <p>{ props.price }</p>
    </Col>
  )
}



export default Cards;