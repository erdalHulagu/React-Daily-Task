import React, { useState, useEffect }  from 'react'
import CardId from './card';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Cards = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

         const loadData = async () => {
               
                try {

                   const resp= await axios.get("https://reqres.in/api/users")
                   const responcse = resp.data.data;
                    setUsers(responcse);
                   
                } catch (error) {
                    console.log(error);
                }
                
            }
     setTimeout(() => {

           setLoading(false)
        }, 1000);

        useEffect(() => {
            loadData();
    }, [])

  return (
    <div>
      <Container className='mt-5' >
        {loading && <Spinner animation='grow' variant='primary'/>}
        <Row>
            {users.map((user,id)=>(
                <Col key={id} md={6} lg={4} xl={2}>
                    <CardId {...user}/>
                </Col>


            ))}

        </Row>
      </Container>
    </div>
  )
}

export default Cards
