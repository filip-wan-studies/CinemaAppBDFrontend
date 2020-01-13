import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import FilmInfo from './FilmInfo';

class Film extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    render() {
        return <FilmInfo />;
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};

export default connect(mapStateToProps, { fetchFilm })(Film);
