import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from './Films';
import Film from './Film';
import Reservation from './Reservation';

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Films} />
            <Route path="/film/:id" exact component={Film} />
            <Route path="/reservation/:id" exact component={Reservation} />
        </Switch>
    );
};

export default Router;
