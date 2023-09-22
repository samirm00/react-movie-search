import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';

import './Movie.css';

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div className={`movie-container ${liked ? 'yes' : 'no'}`}>
            <div className="movie-poster">
                <img
                    src={
                        movie.Poster === 'N/A'
                            ? 'https://images.unsplash.com/photo-1610621062045-ef5f7201bb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80'
                            : movie.Poster
                    }
                    alt={movie.Title}
                />
            </div>
            <div className="movie-details">
                <h2>{movie.Title}</h2>
                <p>
                    <IoCalendarOutline color="white" /> {movie.Year}
                </p>
                <div className="like-btn-container">
                    <button onClick={toggleLike} className="like-button">
                        <FaHeart color={liked ? 'red' : 'white'} size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired
    })
};

export default Movie;
