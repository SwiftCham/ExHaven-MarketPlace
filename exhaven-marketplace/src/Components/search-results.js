import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './search-results.css'

const SearchResults = () => {
    const [results, setResults] = useState({ movies: [], music: [] }); //state for search results
    const location = useLocation();  //used to get the current location
    const navigate = useNavigate(); //used to navigate to different pages

    // Extract the search query from the URL
    const searchQuery = new URLSearchParams(location.search).get('query'); //gets search query from URL


    useEffect(() => {
        const fetchResults = () => {
            axios.get(`http://localhost:4000/api/searchStock?q=${encodeURIComponent(searchQuery)}`) //api endpoint for search
                .then((res) => {
                    setResults(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                });
        };

        if (searchQuery) {
            fetchResults();
        }
    }, [searchQuery]); //re-renders when searchQuery changes

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            <div className="search-results-container">
                <div className="products-column">
                    <h3>Product Listing</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
