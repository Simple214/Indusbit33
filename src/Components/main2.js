import React, { useEffect,useRef, useState } from 'react'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import { useParams } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@finastra/circular-progress';
import './main2.css'

const Main2 =({value10,value5,value11,value6,value3,value1005,value1009,final56,backtohome2,value10082,value10083,backtohome,value10091,amount23,final90,orderid,value10092,value100915,value1008,value0789,changetolight,changetodark,value10059,theme,logo_value,value10057,value_rec,value100910,value_img1,value_img2,amount_pls,value_pay,value10056,bg_ar,bo_ar,from9,to9,value_bo,value_bg,value10058,value198,value10061})=>{
	const [lgShow51, setLgShow51] = useState('');
	const [lgShow566, setLgShow566] = useState('');
	const [lgShowa, setLgShowa] = useState('');
    const [lgShowb, setLgShowb] = useState('');
	const [lgShowc, setLgShowc] = useState('');
	const [lgShowd, setLgShowd] = useState('');
	const [lgShowh, setLgShowh] = useState('');
	const [lgShowi, setLgShowi] = useState('');
	const [lgShowj, setLgShowj] = useState('');
	const [lgShowk, setLgShowk] = useState('');
	const [lgShowe, setLgShowe] = useState('');
	const [lgShowf, setLgShowf] = useState('');
	const [lgShowg, setLgShowg] = useState('');
	const [show, setShow] = useState(false);
    const { id,orderid3 } = useParams()
	const target = useRef(null);
	useEffect(() => {
	
			 fetch(`https://rich-tan-lovebird-coat.cyclic.app/id/${orderid3}`,{
            'method':'post',
            'headers':{'Content-type':'application/json'},
          }).then(res3 => res3.json()).then(res23 => {
          setLgShowa(res23.id)
          setLgShowb(res23.depositAddress)
          setLgShowc(res23.depositCoin)
          setLgShowd(res23.status)
          setLgShowe(res23.settleAddress)
          setLgShowf((res23.createdAt).replace('T',' ').replace('Z',''))
          setLgShowg(res23.settleCoin)
          if(res23.depositCoin=='ETH'){         
          setLgShowh(`ethereum`)
          setLgShowi('eth')
          }
          if(res23.depositCoin=='LTC'){         
              setLgShowh(`litecoin`)
              setLgShowi('ltc')
          }
          if(res23.settleCoin=='BTC'){         
          setLgShowj(`bitcoin`)
          setLgShowk('btc')
          }
          if(res23.settleCoin=='ETH'){         
          setLgShowj(`ethereum`)
          setLgShowk('eth')
          }
          if(res23.depositCoin=='BNB'){         
              setLgShowh(`bnb`)
              setLgShowi('bnb')
          }
          if(res23.settleCoin=='BNB'){         
          setLgShowj(`bnb`)
          setLgShowk('bnb')
          }
          if(res23.settleCoin=='LTC'){         
          setLgShowj(`litecoin`)
          setLgShowk('ltc')
          }
          })

          
	},[])

    return(
        <div>

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
                            <img src={require(`./images/1664849-200.png`)}width="50px" style={{'display':`${value10082}`}} onClick={changetodark} />
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
        <article className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3" style={{'background-color':`${value10058}`, 'color':`${value10059}`,'border':`${bo_ar}`}}>
        <Container fluid>
        
                <Row className='d-flex justify-content-center align-items-center mt-0'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center flex-column'>
        <p style={{'color':`${value10059}`}}  className='fs-4 b text-center'>Created At : {lgShowf} (Zulu Time) </p>
        </Col>
        
        </Row>
        
        <Row className='d-flex justify-content-center align-items-center mt-0'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center flex-column'>
        <h2  style={{'color':`${value10059}`}}  className='b text-center'>Order ID</h2>
        <h5 style={{'color':`${value10059}`}}  className="b text-center">{lgShowa}</h5>
        </Col>
        
        </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-2 m-0'>
     <img src={`https://cryptologos.cc/logos/${lgShowh}-${lgShowi}-logo.png`} width={'85px'} />
                </Col>

                <Col className='col-md-2  m-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right" style={{'color':`${value10059}`}}  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>

                </Col>

                <Col className='col-md-2 m-0'>
     <img src={`https://cryptologos.cc/logos/${lgShowj}-${lgShowk}-logo.png`} width={'85px'} />
                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center mt-4'>

                <Col className='col-md-12'>
                <h3 style={{'color':`${value10059}`}}  className='b text-center h3_send'>Please send <span style={{'color':`${lgShow566}`}}>{amount23}</span> {lgShowc} </h3>
                    <p style={{'color':`${value10059}`}}  className="b text-center para2005">to the following address.....</p>
                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12 d-flex justify-content-center align-items-center flex-row'>
                <input type='text' style={{'color':`${value10059}`,'background-color':`${value10061}`}}   className='b mt-0 mb-4 w-100 tc p-3' value={lgShowb} disabled />

                <Button ref={target} variant="" className="btn mb-4" onClick={() => {
					navigator.clipboard.writeText(value1005)
					setShow(!show)
				}}>
				<Overlay target={target.current} show={show} placement="top">
				{(props) => (
					<Tooltip  id="overlay-example" {...props}>
					Copied
					</Tooltip>
				)}
				</Overlay>
 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard" style={{'color':`${value10059}`}} viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
                    </Button>

                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${lgShowb}`} />
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <p style={{'color':`${value10059}`}} className='b text-center mt-2 mb-2'>Status : {lgShowd}</p>
                <fds-circular-progress indeterminate="true" styles="color:'black'"></fds-circular-progress>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center' onLoad={final90}>
                <Col className='col-md-12'>
                <h3 style={{'color':`${value10059}`}} className='b text-center '>Receiving Address ... </h3>
                <p className='b text-center fs-2' style={{'color':`${value198}`}} className="b fs-5 text-center">{lgShowe}</p>
                </Col>
            </Row>
            

        </Container>
        </article>
        </div>
        </article>
        </Col>
        </Row>
        <Row className='pt-3 d-flex justify-content-center align-items-center' style={{'background-color':`${value_bg}`,'border-top':`${value_bo}`}} >
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-center tc text-white'>IndusBit © 2023</p>
        </Col>
          </Row>
    </div>
    )
}  

export default Main2
