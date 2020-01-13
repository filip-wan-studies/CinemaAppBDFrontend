import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from './Films';
import Film from './Film';

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Films} />
            <Route path="/film/:id" exact component={Film} />
        </Switch>
    );
};

export default Router;
