import React from 'react';
import Card from 'react-bootstrap/Card';

const CardId = (props) => {
  const { id, first_name, last_name, email, avatar } = props;
  return (
    <div>
      <Card className='h-100'>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{id} </Card.Title>
          <Card.Title>{first_name} {last_name}</Card.Title>
          <Card.Subtitle>{email}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardId;
