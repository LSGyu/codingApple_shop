import { useState } from 'react';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Card from './Card';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const [shoes] = useState(data);

  return (
    <div className="App">

      <Routes>
        <Route path='/detail' element={<div>detail</div>} />{/* page */}
        <Route path='/about' element={<div>about</div>}/>
      </Routes>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
    </div>
  );
}

export default App;