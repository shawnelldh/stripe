import Button from 'react-bootstrap/Button'
import { cartContext } from '../CartContext';
import { useContext} from 'react';
import { get ProductData } from '../productsStore';

function CartProduct(props)  {
 const cart = useContext(CartContext);
 const id = props.id;
 const quantity = props.quantitiy
 const productData = getProductData(id);

return (

 <>

    <h3>{productData.title}</h3>
    <p>{quantity} total</p>
    <p>$ (quantity * product.price).toFixed(2) } </p>
    <Button size = 'sm' onClick={()  => cart.deleteFromCart(id)}>Remove</Button>
    <hr></hr>

    </>


