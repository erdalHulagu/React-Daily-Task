
import React, { useState } from 'react'
import { Card, Form, Button, Alert, Spinner} from 'react-bootstrap'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        
        firstName:"",
        lastName:"",
        email:"",
        password: ""
    });

    
const handleLogin = (event) => { 

    const{name,value}=event;

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
    
    <Card className="mt-5" style={{ width: "40%" }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter first name"
        value={state.firstName}
        onSubmit={handleLogin}
        required
        max={20}
        min={3}
         />
        
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter last name"
        value={state.lastName}
        onSubmit={handleLogin}
        required
        max={50}
        min={3}
         />
        
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        value={state.email}
        onSubmit={handleLogin}
        required
        max={50}
        min={3}
         />
        
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={state.password}
        onSubmit={handleLogin}
        required
        max={11}
        min={3}
        
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
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
