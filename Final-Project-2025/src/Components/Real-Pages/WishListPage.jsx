
import React from 'react';
import MovieCard from '../Forms/MovieCard';

export default function WishListPage({ wishList, removeFromWishList }) {
    const getFreeStreamingServices = (streamingInfo) => {
        if (!streamingInfo) return null;
        return streamingInfo.free || [];
    }

    const hasFreeStreaming = (movie) => {
        const freeServices = getFreeStreamingServices(movie.streamingInfo);
        return freeServices && freeServices.length > 0;
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
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '30px',
                    marginTop: '20px'
                }}
                >
                    {wishList.map(movie => {
                        const freeServices = getFreeStreamingServices(movie.streamingInfo);
                        const isFree = hasFreeStreaming(movie);

                        return (
                            <div 
                                key={movie.id}
                                style={{
                                    border: isFree ? '3px solid #22c55e' : '2px solid #e5e7eb',
                                    padding: '15px',
                                    backgroundColor: isFree ? '#f0fdf4' : 'white'
                                }}
                            >
                                <MovieCard 
                                    movie={movie}
                                    buttonText="Remove"
                                    buttonAction={() => removeFromWishList(movie.id)}
                                    isDisabled={false}
                                    showFreeBadge={isFree}
                                />

                                <div>
                                    <h4 style={{ 
                                        marginBottom: '10px',
                                        color: isFree ? '#16a34a' : 'white'
                                        }}>{isFree ? '🎉 Free to Stream!' : 'Streaming:'}</h4>
                                    {freeServices && freeServices.length > 0 ? (
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '10px'
                                        }}>
                                            {freeServices.map(service => (
                                                <div key={service.provider_id} 
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px',
                                                    padding: '5px 10px'
                                                }}>
                                                    {service.logo_path && (
                                                        <img
                                                            src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                                                            alt={service.provider_name}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
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
