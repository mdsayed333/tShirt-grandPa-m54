import React from 'react';
import './Cart.css';

const cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false;
    // 3. && operator (shorthand)
    // 4. || operator 
    let command; 
    if(cart.length === 0){
        command = <p>Please add at least one Items!!!</p>
    }
    else if(cart.length === 1){
        command = <p><small>Please add more...</small></p>
    }else{
        command = <p>Thanks for adding Item</p>
    }
    return (
        <div>
            <h2>Selected Items:{cart.length} </h2>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}> X </button>
                    </p>)
            }
                    {/* // conditional rendering 1 */}
            {command}  
                    {/* // conditional rendering 2 */}     
            {cart.length !==4 ? <p>Keep Adding</p> : <button>Remove All</button>}
                    {/* // conditional rendering 3 */}
            {cart.length ===4 && <button className='orangee'>Review Order</button>}
                    {/* // conditional rendering 3 */}
            {cart.length === 3 && <div className='orangee'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba?</p>
                </div>}  
                    {/* // conditional rendering 4 */}
            {cart.length === 0 || <p className='orangee'>YAY! You are buying...</p>}
        </div>
    );
};

export default cart;