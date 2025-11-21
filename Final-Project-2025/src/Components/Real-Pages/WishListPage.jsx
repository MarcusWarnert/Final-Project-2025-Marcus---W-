
import React from 'react';
import MovieCard from '../Forms/MovieCard';

export default function WishListPage({ wishList, removeFromWishList }) {
    const getFreeStreamingServices = (streamingInfo) => {
        if (!streamingInfo) return null;
        return streamingInfo.free || [];
    }

    
    return (
        <main>
            <h1> My Wishlist</h1>
            {wishList.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <p>Your wishlist is empty.  Please add movies to fill your wishlist.</p>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gap: '20px'
                }}
                >
                    {wishList.map(movie => {
                        const freeServices = getFreeStreamingServices(movie.streamingInfo);

                        return (
                            <div key={movie.id}>
                                <MovieCard 
                                    movie={movie}
                                    buttonText="Remove"
                                    buttonAction={() => removeFromWishList(movie.id)}
                                    isDisabled={false}
                                />

                                <div>
                                    <h4 style={{ marginBottom: '10px'}}>Free to Stream:</h4>
                                    {freeServices && freeServices.length > 0 ? (
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '10px'
                                        }}>
                                            {freeServices.map(service => (
                                                <div key={service.provider_id} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px'
                                                }}>
                                                    {service.logo_path && (
                                                        <img
                                                            src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                                                            alt={service.provider_name}
                                                        />
                                                    )}
                                                    <span>
                                                        {service.provider_name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>
                                            No Free Streaming Service Available
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </main>
    );    
}
