import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }else{
            alert("Already Added");
        }
    }

    const handleRemoveFromCart = (selectedItem) =>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;