
import React, { useState } from 'react'
import { Card, Form, Button, Alert, Spinner} from 'react-bootstrap'

const Login = () => {

   
    const [state, setState] = useState({
        
        firstName:"",
        lastName:"",
        email:"",
        password: ""
    });
    const [loading, setLoading] = useState(false)
    
const handleLogin = (event) => { 

    const{name,value}=event.target;

    setState({...setState, [name]:value})
    
 }
  const handleSubmit=(e) => {
    e.preventDefault();

    setLoading(true)
    setTimeout(() => {

        setLoading(false)

        Alert("Login success")
        
    },2000);
 
 }



  return (
    
    <Card className="m-3 d-auto p-5  bg-success-subtle border-success card " style={{ position: "", width: "30%" }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="text" 
        name='firstName'
        placeholder="Enter first name"
        value={state.firstName}
        onChange={handleLogin}
        required
        max={20}
        min={3}
         />
        
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="text" 
        name='lastName'
        placeholder="Enter last name"
        value={state.lastName}
        onChange={handleLogin}
        required
        max={50}
        min={3}
         />
        
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        name="email"
        placeholder="Enter email"
        value={state.email}
        onChange={handleLogin}
        required
        max={50}
        min={3}
         />
        
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        name='password'
        placeholder="Password"
        value={state.password}
        onChange={handleLogin}
        required
        max={11}
        min={3}
        
        />
      </Form.Group>
      
      <Button 
      variant="primary" 
      type="submit"
      disabled={loading}>{loading && <Spinner animation='bounce'/>}{" "}
        Submit
      </Button >
    </Form>
    </Card>
      
    
  )
}

export default Login
