import React, { useState } from 'react';

export default function Product({ flower, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
        }
    };

    return (
        <div className="grid-item">
            <div className="card">
            <img src={require('../assets/image/'+flower.img)} alt={flower.name} />
                <div className="card-body">
                    <h5 className="card-title">{flower.name}</h5>
                    <p>Price: ${flower.price}</p>
                    <div className="quantity-container">
                        <label htmlFor={`quantity-${flower.id}`}>Quantity:</label>
                        <input
                            type="number"
                            id={`quantity-${flower.id}`}
                            name="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        />
                    </div>
                    <button className="card-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
