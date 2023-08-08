import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header()
{
  const navigate = useNavigate();

    const handleImageClick = () => {

      navigate('/Components/Home'); 
        
    };
    return(

        <>
        
        <Navbar bg="light" expand="lg" variant='light'>
        <Container>
        <Navbar.Brand href="#home" onClick={handleImageClick} >SHOPEE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ml-auto">
          
          <Nav  className="justify-content-end navbar" style={{ width: "100%" }}> 
          <Link className='navbar' to="/Components/Home" ><Nav.Link href="#home">Home</Nav.Link></Link>
          <Link className='navbar' to="/Components/MailProduct" ><Nav.Link href="#link">MEN_SHOES</Nav.Link></Link>
          <Link className='navbar' to="/Components/FemailProduct" ><Nav.Link href="#home" >FEMAIL_SHOES</Nav.Link></Link>
          <Link className='navbar' to="/Components/Bags" > <Nav.Link href="#home">BAGS</Nav.Link></Link>
          <Link className='navbar' to="/Components/Perfume" ><Nav.Link href="#home">PERFUME</Nav.Link></Link>
          <Link className='navbar' to="/Components/Watches" ><Nav.Link href="#home">WATCHES</Nav.Link></Link>
          <Link className='navbar' to="/Components/Mcloths" ><Nav.Link href="#home">MEN'S_CLOTHES</Nav.Link></Link>
          <Link className='navbar' to="/Components/AdminForm" ><Nav.Link href="#home">Admin</Nav.Link></Link>
          <Link className='navbar' to="/Components/Registtration"><Nav.Link href="#home">Register</Nav.Link></Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        
        
        
        </>
    )
}


export default Header;