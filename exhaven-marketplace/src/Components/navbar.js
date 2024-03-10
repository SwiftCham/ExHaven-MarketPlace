// NavbarWithSearch.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

// import logo from '/EXHAVENLOGO.png';

const NavbarWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const navigate = useNavigate(); // Used to navigate to different pages
    
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);


    const handleCartOpen = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);
    const handleLoginOpen = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    const handleSearchChange = (e) => { // Updates the search term when the user types in the search box
        setSearchTerm(e.target.value);  //updates search term
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <div>
            <div className="logo-container" style={{ textAlign: 'center' }}>
                <img 
                    src="/EXHAVENLOGO.png"
                    alt="ExHaven Logo" 
                    style={{ maxWidth: '50%', height: 'auto' }} 
                    
                />
            </div>
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/">ExHaven</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/view-reptiles">Reptiles</Nav.Link>
                        <Nav.Link as={Link} to="/view-birds">Birds</Nav.Link>
                        <Nav.Link as={Link} to="/view-food">Pet Food</Nav.Link>
                        <Nav.Link as={Link} to="/view-products">Pet Products</Nav.Link>
                        <Nav.Link onClick={handleCartOpen}>Cart </Nav.Link>
                        <Nav.Link onClick={handleLoginOpen}>Login</Nav.Link>
                        <Nav.Link as={Link} to="/account-page">Account</Nav.Link>
                    </Nav>
                </Container>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search Site..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </Navbar>

            <Modal show={showCart} onHide={handleCartClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    //TODO: Add cart items here
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCartClose} as={Link} to="/order-confirmation">
                        CheckOut
                    </Button>
                    <Button variant="secondary" onClick={handleCartClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Login</h3>
                    <input type="text" placeholder="Username" />
                    <p></p>
                    <input type="password" placeholder="Password" />
                    <p></p>
                    <button>Login</button>

                    <h3>Register</h3>
                    <input type="text" placeholder="Username" />
                    <p></p>
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <p></p>
                    <button>Register</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLoginClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
        
    );
};

export default NavbarWithSearch;
