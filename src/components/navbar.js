import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import {useState, useContext}from 'react';
import {CartContext} from "../CartContext";
import CartProduct from './CartProduct';                        }

function NavbarComponent() {
   const cart = useContext{CartContext};

   const [show, setShow] = useState(false);
   const  handleClose = () =>setShow(false);
   const handleShow = () =>setShow(true);

   const checkout = async () => {
      const cart = useContext(CartContext)
      
 






   }

 return (
    <Navbar expand="sm">
         <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>      
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
           <Button> Cart 0 Items </Button>
        </Navbar.Collapse>
     </Navbar>

 )

 }

export default NavbarComponent;