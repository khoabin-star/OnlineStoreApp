import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginManager() {
  return (
    <Container className="sign-in">
      <h1>Sign In</h1>
      <Form>
        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-4">
          <Button type="submit">Sign In</Button>
        </div>
      </Form>
    </Container>
  );
}
