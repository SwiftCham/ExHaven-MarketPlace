// NavbarWithSearch.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import Container from 'react-bootstrap/Container';

// import logo from '/EXHAVENLOGO.png';

const NavbarWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const navigate = useNavigate(); // Used to navigate to different pages

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
                    background-color='green'
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
                        <Nav.Link as={Link} to="/view-cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
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
        </div>
    );
};

export default NavbarWithSearch;
