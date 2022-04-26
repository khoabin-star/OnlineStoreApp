import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Rating from "../components/Rating";
import Button from "react-bootstrap/esm/Button";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen(){
  const navigate = useNavigate();
  const params = useParams();
  const {slug} = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  }); 
  useEffect(() => {
     const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
     };
     fetchData();
   }, [slug]);

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart} = state;
  const addToCartHandler = async() => {
    const existingItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/products/${product._id}`);
    if (data.quantityInStock < quantity) {
      window.alert("Sorry, your chosen product out of stock");
      return;
    }
    ctxDispatch({type: "CART_ADD_ITEM", payload: {...product, quantity}});
    navigate('/cart');
  };
  return (
    loading ? <div>Just wait....Loading...</div> : error ? <div>{error}</div> :
    <div>
      <Row>
        <Col md = {6}>
          <img className="image-indi-product" src = {product.image} alt = {product.name}/>
        </Col>
        <Col md = {3}>
          <ListGroup variant = "flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              Brand : {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              Category: {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating = {product.rating}
                numReviews = {product.numberReview}>
              </Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: <p>{product.description}</p>
            </ListGroup.Item>
            {product.quantityInStock < 10 && product.quantityInStock > 0 && 
            <ListGroup.Item>
              <p className="text_warning">Only {product.quantityInStock} left in the stock</p>
              </ListGroup.Item>}
          </ListGroup>
        </Col>
        <Col md = {3}>
          <Card>
            <Card.Body>
              <ListGroup variant = "flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.quantityInStock > 0 ?
                    <h3><Badge bg = "success">In Stock</Badge></h3> :
                    <h3><Badge bg = "danger"> Out of Stock</Badge></h3>
                    }</Col>
                  </Row>
                </ListGroup.Item>
                {product.quantityInStock > 0 && (
                  <ListGroup.Item>
                    <div className="indi-button">
                      <Button onClick={addToCartHandler} size = "lg">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;