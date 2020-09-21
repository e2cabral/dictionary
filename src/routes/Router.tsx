import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../pages/home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
        </BrowserRouter>
    );
}