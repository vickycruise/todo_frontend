import React from 'react';
import { Outlet } from 'react-router-dom'; 
import './header.css';
import {  Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header-layout">
      <header className="header">
      <Navbar className=" bg-primary">
        <Container>
          <Navbar.Brand href="/app">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MY TODO
          </Navbar.Brand>
       
        </Container>
      </Navbar>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
