import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        // Fetch trending items from the API
        fetch('/api/getCarouselItems')
            .then(response => response.json())
            .then(data => setTrendingItems(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Ex-Haven!</h1>
            <h3>Trending Products:</h3>
            <div>
                {/* Bootstrap Carousel of trending items */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {trendingItems.map((item, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {trendingItems.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            >
                                <img src={item.image} className="d-block w-100" alt={item.name} />
                                <div className="carousel-caption">
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <h3>About Us</h3>
            <div>
                <p>
                    Here at Ex-Haven we believe that the word "Exotic" should only apply to the nature of the
                    creatures we sell and not the price nor difficulty of obtaining them. We are a marketplace
                    made by breeders, meaning we skip the cold pet trade, and go straight for what matters; quality
                    and care. We are a community of animal lovers and breeders who are dedicated to providing the best, and healthiest
                    specimens as well as all the equipment and knowledge needed to care for them, all in one place, and one price.
                </p>
            </div>
        </div>
    );
};


export default Home;