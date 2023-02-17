import React from "react";  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './signin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signin = ({backtosignup,binance,gologin,signinpassword,signinemail,value1500,value1503,signinpassword2}) =>{
    return (
		<div>
		<Container>
            <article class="mw6 mt-5 mb-5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
                   <Form>
                   <h5 className='b f3 mt-2'>登录 Bitbarter</h5>
                    <hr className='mb-4 mt-0' />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='b f6'>电子邮件</Form.Label>
                    <Form.Control className='p-3 f5 input101' onChange={signinemail} type="email" placeholder="输入你的电子邮箱地址" />
                    <p className='b text-red text-center tc para3000 mt-2' style={{'display':`${value1500}`}} >请输入有效的电子邮件地址</p>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label className='b f6'>密码</Form.Label>
                        <Form.Control className='p-3 f5 input101' type="password" onBlur={signinpassword2} onFocus={signinpassword} onChange={signinpassword} placeholder="输入您的密码" />
                        <p className='b text-red text-center tc para3000 mt-2' style={{'display':`${value1503}`}} >请输入密码</p>
                    </Form.Group>
                    <Button className='b tc d-flex justify-content-center align-items-center w-100 flex-row btn100 p-2' onClick={gologin} >
                        LOGIN
                    </Button>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                        <a onClick={backtosignup}  className='b anchor_t'>注册</a>
                        </Col>
                    </Row>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                            <a href='https://www.google.com' className='b anchor_t'>Forgot Password ?</a>
                        </Col>
                    </Row>

                    </Form>
                </article>
             
                </Container>
                
          
                </div>
                
    )
}

export default Signin
