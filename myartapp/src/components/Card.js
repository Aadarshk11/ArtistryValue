import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ArtCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/998/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}
