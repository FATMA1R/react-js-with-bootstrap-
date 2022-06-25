import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Card , Container, Row, Col ,Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3
    
    <form>
      
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
           </form>
           <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/100" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     
      the card's c.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item active>Test2</Breadcrumb.Item>
        </Breadcrumb>
        
        <Alert variant="success">This is a button</Alert>
        <Button variant="primary">Test button</Button>{' '}
    
    
    </Col>
    <Col>3 of 3</Col>
  </Row>
</Container>


       
       
      </header>
    </div>
  );
}

export default App;
