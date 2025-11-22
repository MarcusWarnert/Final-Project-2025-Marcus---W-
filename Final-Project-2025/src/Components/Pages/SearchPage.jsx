import React, {useState} from 'react';
import Button from '../Forms/Button';
import MovieCard from '../Forms/MovieCard';

export default function SearchPage({ searchMovies, addToWishList, wishList }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        
        setIsSearching(true);
        const results = await searchMovies(searchQuery);
        setSearchResults(results);
        setIsSearching(false);
    };

    const handleKeyPress = (e) => {
        if (e.key ==='Enter') {
            handleSearch();
        }
    };

    const isInWishList = (movieId) => {
        return wishList.some(movie => movie.id === movieId);
    };

    return (
        <main style={{
            minHeight: '80vh',
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <h1>Search Results</h1>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your movie"
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ceb5b5ff'
                     }}
                />
                <Button handleClick={handleSearch}>
                    Search
                </Button>
            </div>
            {!isSearching && searchResults.length === 0 && !searchQuery && (
            <div>
                    <p style={{textAlign: 'center' }}>Search for movies to add to your wishlist.</p>
            </div>
            )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {searchResults.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        buttonText={isInWishList(movie.id) ? "Added ✓" : "Add to Wishlist"}
                        buttonAction={() =>addToWishList(movie)}
                        isDisabled={isInWishList(movie.id)}
                        showFreeBadge={false}
                    />
                ))}
            </div>
        </main>
    );
}