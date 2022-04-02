import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p>House: {house} </p>
            <p>Gift: {ornament} </p>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Special;