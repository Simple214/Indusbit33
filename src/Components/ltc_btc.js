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

const Ltc_btc = ({reverse,value2,change1,value3,value4,value5,value6,value7,value10,value11,event1,value500,from1,to1,value71,value72,value73,value74,value75,value76,call,value1500,value1006,backtohome,value738,value739,value740,value741,value750,value751,value760,value761,value7610,value501,value10070,value1600,changetorose1,event105,send2,first56,first66,value81,value859,theme,value8591,changetodark,value1008,value10091,value10092,bg1,value10081,value10082,value10083,changetolight,value10085,value10087,value10088,value100910,value10059,value100912,value10057,value100915,orderid1,value0200,value0201,value0789,value_bg,valuetoorder,order_id,changes,oid5,event2,coins,from,to,id1,id2,swap,filteredRobots,onSearchChange,ltcoeth})=>{
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
            
        
		fetch("https://sideshift.ai/api/v2/pair/ltc/btc").then(res => res.json()).then(data20 => {
            if (true) {
                setLgShow5(data20.rate)
            }
        })
    
    },[])


  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return(
        <div>
            
        <Row className='d-flex justify-content-end  align-items-center row_0' style={{'background-color':`${value10085}`}} >
        
        <Col className='col-md-3 d-flex justify-content-center align-items-center flex-row' > <a className="btn45 mt-1 me-2 f6 grow no-underline ba bw1 ph2 pv1 mb1 dib b text-white pt-1" onClick={orderid1}>Search</a>
        <p className='b text-white text-center fs-6  justify-content-end  align-items-center mt-2' style={{'display':`${value0200}`}} >Please Enter a order id</p>
        <input id="name" placeholder='Your Order ID' onChange={value0201} className="b input-reset ba b--black-20 pt-2 pb-2 ps-2 db w-60" type="text" aria-describedby="name-desc" /> </Col>
        
        </Row>
          <Row className='d-flex justify-content-end  align-items-center'>
        <Navbar bg={theme} expand="lg">
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
                        
                      
                 
                            
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            
                            <Dropdown>
                            
                            <Dropdown.Toggle id="dropdown-basic">
                            <img src={require(`./images/lang2.png`)} width="70px" style={{'display':`${value10082}`}}  />
                            <img src={require(`./images/lang2.png`)} width="70px" style={{'display':`${value10083}`}}  />
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://bitbarter-hindi.vercel.app">हिंदी <img src={require(`./images/india.jpg`)} className='flag1' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://bitbarter-jp.vercel.app"> 日本語 <img src={require(`./images/japan.png`)} className='flag2' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://bitbarter-cny.vercel.app"> 中文 <img src={require(`./images/china.png`)} className='flag3' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://bitbarter-ru.vercel.app"> руский <img src={require(`./images/russia.png`)} className='flag4' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://indusbit33.vercel.app/en/ltc/btc"> English </Dropdown.Item>
                            </Dropdown.Menu>
                            
                            </Dropdown>
                            
                            </Nav.Link>
                                            
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            <img src={require(`./images/1664849-200.png`)} width="50px" style={{'display':`${value10082}`}} onClick={changetodark} />
                            </Nav.Link>      
                            
                                                        <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            <svg onClick={changetolight}  style={{'display':`${value10083}`}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi text-white bi-brightness-high-fill" viewBox="0 0 16 16">
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                            </Nav.Link>    
                            
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                     </Row>

        <Row className='d-flex justify-content-center align-items-center main_row' style={{'background-color':`${value0789}`}} >
        <Col className='col-md-6'>

			<article className={`vh-100 dt w-100 pt-5 pb-5`}  >
            <div className="dtc v-mid tc white ph3 ph4-l">
            <article className="mw6 center br3 pa2 pa4-ns mv3 ba b--black-10 shadow-3" style={{'background-color':`${value100910}`,'border':`${value10057}`}}  >
            <Container>
            
            <Row className='tc text-center justify-content-center align-items-center'>
                <Col className='col-md-5 text-black'>
                <Button className={'btn1 b shadow-3'} style={{'background-color':`${value100912}`, 'color':`${value10059}`, 'border':`${value10057}`} } >Variable Rate</Button>
                </Col>
                
                                <Col className='col-md-5 text-black'>
                <Button className={'btn1 b shadow-3'} style={{'background-color':`${value100912}`, 'color':`${value10059}`, 'border':`${value10057}`} } >Fixed Rate</Button>
                </Col>
                
                
            </Row>

            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p className='b para1' style={{'color':`${value10059}`}} >1 <span className='title1 ttu' >LTC</span> = <span className='value'></span>{lgShow5} <span className='title2 ttu'>BTC</span></p>
                </Col>
            </Row>

            <Row className='mt-3 justify-content-center align-items-center'>
            <Col className='col-md-5 col-12 text-center tc col10 col_special'>
            <article  onClick={() => setLgShowA(true)} className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4" style={{'background-color':`${value100910}`,'border':`${value10057}`}} >
                    <img  src={require(`./images/ltc.png`)} className='img_special1' />
                    <h3 className='b mt-3 text-center fs-6' style={{'color':`${value10059}`}}>SEND</h3>
                    <p className='b text-center tc fs-6' style={{'color':`${value10059}`}}>Litecoin</p>
                </article>
                </Col>

                <Col className='col-sm-2 col-12 tc text-center col13'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" style={{'color':`${value10059}`}} className="bi bi-arrow-left-right svg1" viewBox="0 0 16 16" onClick={reverse}>
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                </svg>
           
                </Col>

                <Col className='col-md-5 col-12 text-center tc col10'>
                <article onClick={() => setLgShow(true)} style={{'background-color':`${value100910}`,'border':`${value10057}`}} className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4">
                <img  src={require(`./images/btc.png`)}  className='img_special2' />
                <h3 className='b ttu mt-3 fs-6' style={{'color':`${value10059}`}} >RECEIVE</h3>
                <p className='b' style={{'color':`${value10059}`}} >Bitcoin</p>
                </article>
                </Col>
            </Row>
                        <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p className='b para258' style={{'color':`${value10059}`}}>Enter the amount that you will send</p>
            <input id="name2" style={{'border-radius':'3px','color':`black`, 'background-color':`#f0f4fa`,'border-left':'3px solid black','border-right':'3px solid black','border-top':'2px solid black','border-bottom':'7px solid black'}} className="b input-reset ba b--black-20 pa3 mb2 db w-100 tc text-center" type="number" aria-describedby="name-desc" onFocus={value10070} onChange={event2} />
            <p className='ttu b text-red text-center tc para3000' style={{'display':`${value501}`}} >Min. LTC Amount is 1.0.</p>
            <p className='ttu b text-red text-center tc para3000' style={{'display':`${value1600}`}} >Please Enter a Amount</p>
            </Col>
            </Row>

            
            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p style={{'color':`${value10059}`}} className='b para10'>Receiving address</p>
                </Col>
            </Row>


            <Row className='mt-0'>
            <Col className='col-md-12 text-black'>
            <input id="name" style={{'border-top':'2px solid black','border-bottom':'7px solid black','border-right':'2px solid black',}} className="input_address b  text-center tc input-reset pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={`Your BTC (Only Segwit) Address`} onChange={event1} onFocus={value1006} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value500}`}} >Please Enter a Valid {value4} Address</p>
            <p className='b text-red text-center tc para3000 ttu' style={{'display':`${value1500}`}} >Please Enter a Address</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='col-md-12 mt-2 mb-2 text-black'>
                <Link className='no-underline p-2 btn2 b shadow-3' style={{'background-color':`${value100910}`,'border':`${value10057}`,'color':`${value10059}`}}  onClick={changes}>EXCHANGE</Link>
                </Col>
            </Row>


   <Modal
        size="lg"
        show={lgShowA}
          onHide={() => setLgShowA(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title className='b tc text-center' id="example-modal-sizes-title-sm">
            You Will Send
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
         
  <Row className='tc text-center justify-content-center align-items-center'> 
  
  <Col className='col-md-3 col-12 tc text-center '>  <Link className='no-underline' to="/en/eth/btc">
  <article className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4" style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                    <img  src={require(`./images/eth.png`)} width="50px" className='text-center tc' />
                    <h3 className='b mt-3 text-center fs-6' style={{'color':`${value10059}`}}>ETH</h3>
                    <p className='b text-center  tc fs-6' style={{'color':`${value10059}`}}>Ethereum</p>
</article>
</Link>
</Col> 

  <Col className='col-md-3 col-12 tc text-center '>  <Link className='no-underline' to="/en/bnb/btc">
  <article className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4" style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                    <img  src={require(`./images/bnb-bsc.png`)} width="50px" className='text-center tc' />
                    <h3 className='b mt-3 text-center fs-6' style={{'color':`${value10059}`}}>BNB</h3>
                    <p className='b text-center  tc fs-6' style={{'color':`${value10059}`}}>Binance-Coin</p>
</article>
</Link>
</Col> 


</Row>     

  
        </Modal.Body>
      </Modal>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className='b text-center tc' id="example-modal-sizes-title-lg">
          You Will Receive
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
  <Row className='tc text-center justify-content-center align-items-center'> 
  
  <Col className='col-md-3 col-12 tc text-center '>  <Link className='no-underline' to="/en/ltc/eth" onClick={ltcoeth}>
  <article className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4" style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                    <img  src={require(`./images/eth.png`)} width="50px" className='text-center tc' />
                    <h3 className='b mt-3 text-center fs-6' style={{'color':`${value10059}`}}>ETH</h3>
                    <p className='b text-center  tc fs-6' style={{'color':`${value10059}`}}>Ethereum</p>
</article>
</Link>
</Col> 

  <Col className='col-md-3 col-12 tc text-center '>  <Link className='no-underline' to="/en/ltc/bnb">
  <article className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4" style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                    <img  src={require(`./images/bnb-bsc.png`)} width="50px" className='text-center tc' />
                    <h3 className='b mt-3 text-center fs-6' style={{'color':`${value10059}`}}>BNB</h3>
                    <p className='b text-center  tc fs-6' style={{'color':`${value10059}`}}>Binance-Coin</p>
</article>
</Link>
</Col> 

</Row>


        </Modal.Body>
      </Modal>


    </Container>
            </article>
            </div>
            </article>
                    </Col>
            <Col className='col-md-6 justify-content-center align-items-center text-center tc pt-5 pb-5'>
            <Row>
        <img src={require(`./images/r1.png`)} width="500px" />
            </Row>
             <Row>
             <h1 className='b text-white tc text-center'>Swap your Bitcoin (BTC),Litecoin (LTC) & Ethereum (ETH).</h1>
             </Row>

    
            </Col>
                    </Row>
            <Row className='d-flex row589 justify-content-center align-items-center' style={{'background-color':`${value10087}`,'color':`${value10088}`}}>
            <Col className='col-md-12'>
            <h2 className='tc b fs-2 mt-4 text-center'>How to Exchange Crypto</h2>
            <p className='b fs-4 tc text-cente br'>Exchanging crypto is simple & easy on IndusBit.</p>
            <p className='b fs-4 tc text-center'>Follow the four steps</p>
            <Row className='d-flex mt-5 mb-5 justify-content-center align-items-center tc text-center'>
            
            <Col className='col-md-3 mt-3 mb-3 col-12 justify-content-center align-items-center'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-hand-index-thumb-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"/>
            </svg>
            <h6 className='b fs-6'>Choose the Crypto - Pair you like.</h6>
            </Col>
            
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-wallet2" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
            <h6 className='b fs-6'>Enter your crypto wallet address</h6>
            </Col>
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-cursor-fill" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
            </svg>
            <h6 className='b fs-6'>Click on Exchange</h6>
            </Col>
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-currency-bitcoin" viewBox="0 0 16 16">
  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
</svg>
            
            <h6 className='b fs-6'>Receive your crypto in seconds</h6>
            </Col>
            </Row>
            </Col>
            </Row>
            <Row className='pt-3 d-flex justify-content-center align-items-center text-center tc' style={{'background-color':`${value_bg}`}} >
            <Col className='col-md-12'>
            <h3 className='text-white b text-center tc' >IndusBit © 2023</h3>
            </Col>
            </Row>
        </div>
    )
}

export default Ltc_btc
