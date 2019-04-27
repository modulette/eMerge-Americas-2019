import React from 'react';
import { Nav } from "react-bootstrap";
import './TabBar.css';

const TabBar = () =>(
        <Nav fill variant="tabs" defaultActiveKey="/home" className="fixed-bottom">
        <Nav.Item>
          <Nav.Link href=""><i className="far fa-calendar-alt"></i> <span>Feed</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=""><i className="fas fa-plus"></i> <span>Event</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=""><i className="far fa-user"></i> <span>User</span></Nav.Link>
        </Nav.Item>
      </Nav>
);

export default TabBar;