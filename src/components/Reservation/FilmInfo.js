import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import LoadingSpinner from '../common/LoadingSpinner';

class FilmInfo extends React.Component {
    componentDidMount() {
        if (_.isEmpty(this.props.film) || this.props.id !== this.props.film.id) this.props.fetchFilm(this.props.id);
    }

    render() {
        console.log(this.props.film, this.props.id);
        if (_.isEmpty(this.props.film)) return <LoadingSpinner></LoadingSpinner>;
        else return <div>{this.props.film.title}</div>;
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps, { fetchFilm })(FilmInfo);
