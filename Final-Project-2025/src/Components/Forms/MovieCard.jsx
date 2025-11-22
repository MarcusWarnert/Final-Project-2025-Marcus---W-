import React from 'react';
import Button from './Button';

export default function MovieCard ({ movie, buttonText, buttonAction, isDisabled, showFreeBadge }) {

    //This should use the image they give, if there indeed is one.
    let movieImage;
    if (movie.poster_path) {
        movieImage = (
            <div sytyle={{ position: 'relative' }}>
                <img 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                        display: 'block'
                    }}
                />
                {showFreeBadge && (
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        
                    }}>
                        FREE
                    </div>
                )}
            </div>
        );
    } else {
        movieImage = (
            <div>
                No Image
            </div>
        )
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
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