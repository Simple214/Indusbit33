import React, { useEffect,useRef, useState } from 'react'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@finastra/circular-progress';
import './main2.css'

const Main2 =({value10,value5,value11,value6,value3,value1005,value1009,final56,backtohome2,value10082,value10083,backtohome,value10091,amount23,final90,orderid,value10092,value100915,value1008,value0789,changetolight,changetodark,value10059,theme,logo_value,value10057,value100910})=>{
	const [lgShow51, setLgShow51] = useState('');
	const [lgShow566, setLgShow566] = useState('');
	const [show, setShow] = useState(false);
	const target = useRef(null);
	useEffect(() => {
		if(value3=="LTC"){
			setLgShow566("#345c9c")
		}
		if(value3=="TRX"){
			setLgShow566("#fe060b")
		}
		if(value3=="BTC"){
			setLgShow566("#f6921b")
		}
		if(value3=="DOGE"){
			setLgShow566("#baa133")
		}
		if(value3=="DASH"){
			setLgShow566("#2673c3")
		}
		if(value3=="BCH"){
			setLgShow566("#0bc18d")
		}
		if(value3=="XMR"){
			setLgShow566("#f26623")
		}
		if(value3=="BNB"){
			setLgShow566("#f0b80c")
		}
		if(value3=="ETC"){
			setLgShow566("#3ab93b")
		}
		let value178 = Math.random(0,100)
		fetch(`https://api.hashify.net/hash/md4/hex?value=${value178}`).then(res3 => res3.json()).then( res5 => {
			let value1056 = res5.Digest
			let final_value1056 = value1056.slice(0, 10)
			setLgShow51(final_value1056)
		})
	},[])

    return(
        <div>

       <Row className='d-flex justify-content-end  align-items-center'>
        <Navbar bg={theme} expand="lg">
        <Container fluid>
                        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center mt-1">
                            <img src={require(`./logo.png`)} alt='bitbarter_logo' className='img25 ms-5' onClick={backtohome} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" style={{'background-color':`${value100915}`}} >
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className=' b text-white d-flex justify-content-center align-items-center navlink'>Wallets <img src={require(`./green.png`)}   className='ms-2' width={'17px'}/>
                        <span className="b span45 text-white d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span>
                        </Nav.Link>
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className='b text-white  d-flex justify-content-center align-items-center navlink'>System Status <img src={require(`./green.png`)} className='ms-2' width={'17px'}/>
                        <span className="b text-white span45 d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span></Nav.Link>
                        
                      
                 
                            
 
                                            
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            <img src={require(`./1664849-200.png`)}width="50px" style={{'display':`${value10082}`}} onClick={changetodark} />
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

<Row className='d-flex justify-content-center align-items-center' style={{'background-color':`${value0789}`}} >
<Col className='col-md-12 col-12'>
        <article className="vh-100 dt w-100">
        <div className="dtc v-mid tc white ph3 ph4-l">
        <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
        <Container fluid>
        
        <Row className='d-flex justify-content-center align-items-center mt-0'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center flex-column'>
        <h2 className='b text-black text-center'>Order ID</h2>
        <h5 className="b text-black text-center">{orderid}</h5>
        </Col>
        
        </Row>

            <Row className='d-flex justify-content-center align-items-center'>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value10}-${value5}-logo.png`} width={'85px'} />
                </Col>

                <Col className='col-md-2  m-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right text-black" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>

                </Col>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value11}-${value6}-logo.png`}  width={'85px'} />
                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center mt-4'>

                <Col className='col-md-12'>
                <h3 className='b text-black text-center h3_send'>Please send <span style={{'color':`${lgShow566}`}}>{amount23}</span> {value3} </h3>
                    <p className="b text-black text-center para2005">to the following address.....</p>
                </Col>xz

            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12 d-flex justify-content-center align-items-center flex-row'>
                <input type='text' className='b text-black mt-0 mb-4 w-100 tc p-3' value={value1005} disabled />

                <Button ref={target} variant="" className="btn mb-4" onClick={() => {
					navigator.clipboard.writeText(value1005)
					setShow(!show)
				}}>
				<Overlay target={target.current} show={show} placement="right">
				{(props) => (
					<Tooltip id="overlay-example" {...props}>
					Copied
					</Tooltip>
				)}
				</Overlay>
                <img src={require('./clipboard_copy_icon_152888.png')} width={'35px'}/>
                    </Button>

                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${value1005}`} />
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <p className='b text-black text-center mt-2 mb-2'>Awaiting Payment....</p>
                <fds-circular-progress indeterminate="true"></fds-circular-progress>
                </Col>
            </Row>



            <Row className='d-flex justify-content-center align-items-center' onLoad={final90}>
                <Col className='col-md-12'>
                <h3 className='b text-black text-center '>Receiving Address ... </h3>
                <p className='b text-center fs-2' style={{'color':'#d5018e'}} className="b fs-5 text-center">{final56}</p>
                </Col>
            </Row>
            

        </Container>
        </article>
        </div>
        </article>
        </Col>
        </Row>
        <Row className='pt-3 d-flex justify-content-center align-items-center' style={{'background-color':`${value0789}`,'border-top':'5px solid white'}} >
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-center tc text-white'>IndusBit © 2023</p>
        </Col>
          </Row>
    </div>
    )
}  

export default Main2
