import React from 'react';

import { WordList } from '../../components/WordList/WordList';

import './Home.css';

interface Props {

}

export const Home: React.FC<Props> = () => {
    return (
        <div className="container">
            <div className="row">
                <WordList words={[]} />
            </div>
        </div>
    );
}