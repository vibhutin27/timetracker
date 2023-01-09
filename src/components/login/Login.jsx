import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log( email, password);
    const userData = {
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setEmail('');
    setPassword('');
  };
 
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };

  return (
    <>
    {!isLoggedin ? (
    <Container className='box'>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
        
        </Col>
        <Col md="auto">
          <Form action="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" 
              controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} 
              placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={login}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs lg="2">
       
        </Col>
          
      </Row>
    
    </Container>
    ) : (
      <>
        <h1>User is logged in</h1>
        <button onClickCapture={logout}>logout user</button>
      </>
      )}
      </>
  );
}

export default Login