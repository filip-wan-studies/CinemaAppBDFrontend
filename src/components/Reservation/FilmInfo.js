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
        console.log(this.props.film);
        return _.isEmpty(this.props.film) ? (
            <LoadingSpinner></LoadingSpinner>
        ) : (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="m-3">Title: {this.props.film.imdb.Title}</h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps, { fetchFilm })(FilmInfo);
