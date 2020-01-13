import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from './Films';

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Films} />
        </Switch>
    );
};

export default Router;
