import React from "react";  
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './signin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import './Signup.css'

const Signup = ({submitting,changeemail,changepassword,repassword,backtologin}) =>{
    return (
		<div>
		<Container>
		<article class="mw6 mb-3 mt-3 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                   <Form>
                    <h5 className='b f3'>Signup</h5>
                    <hr className='mb-2 mt-0' />
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='b f6'>Profile Id</Form.Label>
                    <Form.Control className='p-3 f5 input101' onChange={changeemail} type="text" placeholder="Enter your profile id" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='b f6'>E-mail</Form.Label>
                        <Form.Control className='p-3 f5 input101' onChange={changeemail} type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='b f6'>Password</Form.Label>
                        <Form.Control className='p-3 f5 input101' onChange={changepassword} type="password" placeholder="Enter your Password" />
                    </Form.Group>


                    <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label className='b f6'>Confirm Password</Form.Label>
                        <Form.Control className='p-3 f5 input101' onChange={repassword} type="password" placeholder="Re-enter your Password" />
                    </Form.Group>

                    <Button className='tc d-flex justify-content-center align-items-center w-100 flex-row btn100 p-2' onClick={submitting}>
                        <Row className='tc d-flex justify-content-center align-items-center'>
                        <Col className='b tc col-md-12'>
                        Sign Up
                        </Col>
                        </Row>
                    </Button>

                    <Row className='tc mt-4'>
                        <Col className='col-md-12 tc'>
                            <a onClick={backtologin} className='b anchor_t tc'>Log In</a>
                        </Col>
                    </Row>


                    </Form>
                </article>
                </Container>
                </div>
    )
}

export default Signup
