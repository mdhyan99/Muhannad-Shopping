import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Kontakt() {
    return (

        <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nachname:</Form.Label>
            <Form.Control type="email" placeholder="Schreiben Sie Ihre Nachname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Vorname:</Form.Label>
            <Form.Control type="email" placeholder="Schreiben Sie Ihre Vorname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Schreiben Sie Ihre Email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ihre Nachricht:</Form.Label>
            <Form.Control as="textarea" rows={4}  placeholder="Schreiben Sie Ihre Nachricht"/>
          </Form.Group>
          <Button type="submit">Schicken</Button>
      
        </Form>

      );
}
