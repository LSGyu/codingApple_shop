import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Cards from './Cards.js';
import Detail from './Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
//import styled from 'styled-components';

// const Practice = styled.a`
//   background: ${(props) => props.bg}; //조건문도 사용 가능함
//   color: black;
//   padding: 10px;
// `

//styled.a(Practice) 기존 것 가져와서 커스텀 가능

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      {/* <Practice bg='red'>practice</Practice> */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about/member') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about/location') }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Cards />} />{/* page */}
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<div>정보페이지<Outlet></Outlet></div>}>{/* Nested Route, Outlet은 Nested Route의 Child를 나타내는 위치 표시 */}
          <Route path='member' element={<div>맴버정보페이지</div>} />
          <Route path='location' element={<div>위치정보페이지</div>} />
        </Route>
      </Routes>



    </div>
  );
}

export default App;