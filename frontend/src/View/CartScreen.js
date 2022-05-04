import { useContext } from 'react';
 import { Store } from '../Store';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import MessageBox from '../components/MessageBox';
 import ListGroup from 'react-bootstrap/ListGroup';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Link } from 'react-router-dom';

 export default function CartScreen() {
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const {
     cart: { cartItems },
   } = state;

   return (
     <div>
       <h1>Shopping Cart</h1>
       <Row>
         <Col md={8}>
           {cartItems.length === 0 ? (
             <MessageBox>
               Cart is empty. <Link to="/">Go Shopping</Link>
             </MessageBox>
           ) : (
             <ListGroup>
               {cartItems.map((item) => (
                 <ListGroup.Item key={item._id}>
                   <Row className="align-items-center">
                     <Col md={2}>
                       <img src={item.image} alt={item.name} className="img-fluid img-cart"/>{' '}
                       {/* <Link to={`/product/${item.slug}`}>{item.name}</Link> */}
                     </Col>
                     <Col md={6}>
                     <ListGroup variant = "flush">
                       <ListGroup.Item>
                         <h1>{item.name}</h1>
                       </ListGroup.Item>
                       {item.price > 25 && <ListGroup.Item>
                         <p>Eligible for FREE Shipping</p>
                       </ListGroup.Item>}
                       <ListGroup.Item>
                        <Button variant="primary">
                          <i class='fa fa-minus-circle' color='blue'></i>
                        </Button>{' '}
                        <span>Qty: {item.quantity}</span>{' '}
                        <Button variant="primary">
                          <i class='fa fa-plus-circle' color='blue'></i>
                        </Button>
                       </ListGroup.Item>
                       </ListGroup>
                     </Col>
                     <Col md={2}>
                       <ListGroup variant="flush">
                         <ListGroup.Item>
                           <p>Price</p>
                         </ListGroup.Item>
                         <ListGroup.Item className='price-cart'>
                          ${item.price}
                         </ListGroup.Item>
                         <ListGroup.Item>
                         </ListGroup.Item>
                       </ListGroup>
                       </Col>
                     <Col md={2}>
                       <Button variant="dark">
                        <i class='fas fa-trash'></i>
                       </Button>
                     </Col>
                   </Row>
                 </ListGroup.Item>
               ))}
             </ListGroup>
           )}
         </Col>
         <Col md={4}>
           <Card>
             <Card.Body>
               <ListGroup variant="flush">
                 <ListGroup.Item>
                   <h3>
                     Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                     items) : $
                     {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                   </h3>
                 </ListGroup.Item>
                 <ListGroup.Item>
                   <div className="d-grid">
                     <Button
                       type="button"
                       variant="primary"
                       disabled={cartItems.length === 0}
                     >
                       Proceed to Checkout
                     </Button>
                   </div>
                 </ListGroup.Item>
               </ListGroup>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </div>
   );
 }