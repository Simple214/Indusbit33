import React from "react";  
import { TypeAnimation } from 'react-type-animation';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route,useLocation, Routes,Link,Navigate } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom"
import { sha256 } from 'js-sha256';
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Searchbox from './searchbox';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import './home.css'

const Notfound = ({reverse,value2,change1,value3,value4,value5,value6,value7,value10,value11,event1,value500,from1,to1,value71,value72,value73,value74,value75,value76,call,value1500,value1006,backtohome,value738,value739,value740,value741,value750,value751,value760,value761,value7610,value501,value10070,value1600,changetorose1,event105,send2,first56,first66,value81,value859,theme,value8591,changetodark,value1008,value10091,value10092,bg1,value10081,value10082,value10083,changetolight,value10085,value10087,value10088,value100910,value10059,value100912,value10057,value100915,orderid1,value0200,value0201,value0789,value_bg,valuetoorder,order_id,changes,oid5,event2,coins,from,to,id1,id2,swap,filteredRobots,onSearchChange})=>{
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true); 
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShowA, setLgShowA] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow2, setLgShow2] = useState('');
    const [lgShow5, setLgShow5] = useState('');

    useEffect(() => {
        
    
    },[])


  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return(
        <div>
          <Row className='d-flex justify-content-end  align-items-center'>
        <Navbar bg='dark' expand="lg">
        <Container fluid>
                        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center mt-1">
                            <img src={require(`./images/logo.png`)} alt='bitbarter_logo' className='img25 ms-5' onClick={backtohome} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" style={{'background-color':`${value100915}`}} >
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className=' b text-white d-flex justify-content-center align-items-center navlink'>Wallets <img src={require(`./images/green.png`)}   className='ms-2' width={'17px'}/>
                        <span className="b span45 text-white d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span>
                        </Nav.Link>
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className='b text-white  d-flex justify-content-center align-items-center navlink'>System Status <img src={require(`./images/green.png`)} className='ms-2' width={'17px'}/>
                        <span className="b text-white span45 d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span></Nav.Link>
                        
                      
 

                            
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                     </Row>
                     <Row className='bg-dark-pink align-items-center justify-content-center vh-100'>
                         <Col className='col-md-12'>               
    <h1 class="fs-1 f2-m f-subheadline-l text-white fw6 tc">**404 Not Found**</h1>
    <h1 class="fs-1 f2-m f-subheadline-l text-white fw6 tc">
<a className="text-white  f3 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="http://localhost:3000/en/ltc/btc"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> Back To Home</a>
    </h1>

    </Col>
</Row>

        </div>
    )
}

export default Notfound
