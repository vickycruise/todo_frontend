import React from "react";
import { Outlet } from "react-router-dom";
import "./header.css";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-layout">
      <header className="header">
        <Navbar className=" bg-primary">
          <Container>
            <Navbar.Brand href="/">
              {new Date().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
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
