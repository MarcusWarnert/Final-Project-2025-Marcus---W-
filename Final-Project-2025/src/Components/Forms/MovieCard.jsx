import React from 'react';
import Button from './Button';

export default function MovieCard ({ movie, buttonText, buttonAction, isDisabled }) {

    //This should use the image they give, if there indeed is one.
    let movieImage;
    if (movie.poster_path) {
        movieImage = (
            <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
            />
        );
    } else {
        movieImage = (
            <div>
                No Image
            </div>
        )
    }

    return (
        <div>
            {movieImage}
        
            <h3 style={{marginBottom: '10px'}}>{movie.title}</h3>

            <Button
                handleClick={buttonAction}
                classes={isDisabled ? 'button-disabled' : 'button-enabled'}
            >
            {buttonText}
            </Button>
        </div>
    );
}