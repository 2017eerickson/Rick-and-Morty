import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,NavLink,useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return(
        <div  className='space-x-7'>
            <Navbar  id='nav' expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">Rick and Morty's portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link as={Link}  to="/">Home</Nav.Link>
                            <Nav.Link as={Link}  to="/about">About</Nav.Link>
                            <Nav.Link as={Link}  to="/character">Characters</Nav.Link>
                            {/* <Nav.Link onClick ={() => { navigate(`/characterdetails/${id}`)} }> Character Details </Nav.Link> */}
                            <Nav.Link onClick ={() => { navigate(`/favoriteCharactersPage`)} }>Favorite Chaarcters</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  );
}

export default Header