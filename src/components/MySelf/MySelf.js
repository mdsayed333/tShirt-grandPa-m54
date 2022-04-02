import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h5>Me...</h5>
            <p>House: {house} </p>
            <Special house={house}></Special>
        </div>
    );
};

export default MySelf;