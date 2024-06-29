
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        try {
            const response = await axios.get('/api/view-wishlist/');
            setWishlistItems(response.data);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    };

    const removeFromWishlist = async (productId) => {
        try {
            await axios.delete(`/api/remove-from-wishlist/${productId}/`);
            fetchWishlist(); // Refresh wishlist after removal
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    return (
        <div className='padd-x' style={{height: "100vh",marginTop: "100px"}}>
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <h3>{item.product.name}</h3>
                                <button onClick={() => removeFromWishlist(item.product.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistPage;