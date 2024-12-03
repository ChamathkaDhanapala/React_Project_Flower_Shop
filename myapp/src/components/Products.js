import '../assets/CSS/layout.css';
import { useState } from 'react';
import Product from './Product'; 
import Cart from './Cart';
import { flowers } from './FlowerDB'; 

export default function Products() {
    const [cart, setCart] = useState([]);

    
    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + quantity } : item
            ));
        } else {
            setCart([...cart, { ...product, qty: quantity }]);
        }
    };

    return (
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {flowers.map(flower => (
                        <Product key={flower.id} flower={flower} addToCart={addToCart} />
                    ))}
                </div>
            </div>
            <div className="item3">
                <Cart cart={cart} />
            </div>
        </>
    );
}
