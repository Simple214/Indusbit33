import React,{useEffect,useState} from "react";  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './main2.css'

const Main3 =({value10,value5,value11,value6,value3,value1005,final56,call2home,value19,orderid})=>{
    const [lgShow51, setLgShow51] = useState('');
    
    useEffect(() => {
    fetch('https://rich-tan-lovebird-coat.cyclic.app/txn',{
        'method':'post',
        'headers':{'Content-type':'application/json'},
        'body': JSON.stringify({
            to58:value6
          })
      }).then(res3 => res3.json()).then( res5 => {
        setLgShow51(res5.txid)
      })
},[])

    return(
        <div>
        <article className="vh-100 dt w-100 bg-dark-pink">
        <div className="dtc v-mid tc white ph3 ph4-l">
        <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
        <Container fluid>
        <Row className='d-flex justify-content-center align-items-center'>

        <Row className='mt-4'>
        <Col className='col-md-12 text-black'>
        <img src={require(`./logo.png`)} alt='bitbarter_logo' className='img25' />
        </Col>
        </Row>
        
        <Row className='mt-4'>
        <Col className='col-md-12 text-black'>
        <h2 className='b text-black text-center'>Order ID</h2>
        <h5 className="b text-black text-center">{orderid}</h5>
        </Col>
        </Row>
        
            <Col className='col-md-2 m-0'>
                <img src={`https://cryptologos.cc/logos/${value10}coin-${value5}-logo.png`} width={'55px'} />
            </Col>
            
        
            
            <Col className='col-md-2  m-0'>

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right text-black" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>

            </Col>

            <Col className='col-md-2 m-0'>
                <img src={`https://cryptologos.cc/logos/${value11}coin-${value6}-logo.png`}  width={'55px'} />
            </Col>

            </Row>
            
         
            
            <Row className='mt-4'>
            <Col className='col-md-12 text-black'>
            <h3 className='b text-black text-center'>{value19}</h3>
            </Col>
            </Row>

            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                <Col className='col-md-6 d-flex justify-content-center align-items-center text-black flex-column'>
                <h4 className='b text-black text-center'>Received</h4>
                <p className='b text-center'>We Received {value5} ...</p>
                </Col>
                <Col className='col-md-6 d-flex justify-content-center align-items-center text-black flex-column'>
                <h4 className='b text-black text-center'>Sent</h4>
                <p className='b text-center'>We Sent {value6} ...</p>
                </Col>
            </Row>


            <Row className='d-flex justify-content-center align-items-center mt-4 mb-2'>
                <Col className='col-md-12'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bvJmzMKT53f1uZYSIbw38ufxVrwU4QegXA&usqp=CAU' width={'100px'}/>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col className='col-md-12 text-black'>
                    <h6 className='b text-black text-center'>Make a new Barter....</h6>
                <Button className='btn2 b text-black shadow-5' onClick={call2home}>HOME</Button>
                </Col>
            </Row>

        </Container>
        </article>
        </div>
        </article>
    </div>
    )
}  

export default Main3
