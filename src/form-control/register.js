import React, { useState } from 'react'
import { Card, Row, Col ,Form, Button,InputGroup, Alert, Spinner} from 'react-bootstrap'
const Register = () => {
        const [state, setState] = useState({
            
            firstName:"",
            lastName:"",
            county:"",
            city:"",
            email:"",
            password: "",
            createAt:""
        });
        const [loading, setLoading] = useState(false)
        
    // const handleLogin = (event) => { 
    
    //     const{name,value}=event.target;
    
    //     setState({...setState, [name]:value})
        
    //  }
      const handleSubmit=(e) => {
        e.preventDefault();
    
        setLoading(true)
        setTimeout(() => {
    
            setLoading(false)
    
            Alert("Login success")
            
        },2000);
     
     }
    
    
    
      return (
        
        <Card className="m-3 d-auto p-5  bg-danger-subtle " style={{ position: "", width: "30%" }}>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="text" 
            name='firstName'
            placeholder="Enter first name"
            value={state.firstName}
            onChange={(e) => setState({...state, firstName: e.target.value})}
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
            onChange={(e) => setState({...state, lastName: e.target.value})}
            required
            max={50}
            min={3}
             />
             <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>County</Form.Label>
            <Form.Control 
            type="text" 
            name='county'
            placeholder="Enter county please"
            value={state.county}
            onChange={(e) => setState({...state, county: e.target.value})}
            required
            
            
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control 
            type="text" 
            name='city'
            placeholder="Enter your city"
            value={state.city}
            onChange={(e) => setState({...state, city: e.target.value})}
            required
           
            
            />
          </Form.Group>
            
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            placeholder="Enter email please"
            value={state.email}
            onChange={(e) => setState({...state, email: e.target.value})}
            required
            
             />
            
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            name='password'
            placeholder="Enter password please"
            value={state.password}
            onChange={(e) => setState({...state, password: e.target.value})}
            required
            
            
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create At</Form.Label>
            <Form.Control 
            type="password" 
            name='password'
            placeholder="Enter the time please"
            value={state.createAt}
            onChange={(e) => setState({...state, createAt: e.target.value})}
            required
            
            
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
    
  

export default Register
