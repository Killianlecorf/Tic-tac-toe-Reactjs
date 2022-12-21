import React from 'react';
import Header from '../components/Header';
import PlayGame from '../components/PlayGame';

const game = () => {
    return (
        <div>
            <Header />
            <div className='body-content'>
                <PlayGame />
            </div>
        </div>
    );
};

export default game;