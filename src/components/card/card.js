import React from 'react';
import {Card , Button } from 'react-bootstrap';

const CardId = (props) => {
  const { id, first_name, last_name, email, avatar, deleteCard } = props;
  return (
    <div>
      <Card className='h-100'>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{id} </Card.Title>
          <Card.Title>{first_name} {last_name}</Card.Title>
          <Card.Subtitle>{email}</Card.Subtitle>
          <Button variant="danger" onClick={()=>deleteCard(id)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardId;
