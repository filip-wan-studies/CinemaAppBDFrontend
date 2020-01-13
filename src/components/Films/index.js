import React from 'react';
import { connect } from 'react-redux';
//import { fetchFilms } from '../../actions';

class Films extends React.Component {
    render() {
        return <div>Films</div>;
    }
}

export default connect(
    null,
    {} // { fetchFilms }
)(Films);
