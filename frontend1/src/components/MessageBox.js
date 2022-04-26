import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert>{props.children}</Alert>;
}