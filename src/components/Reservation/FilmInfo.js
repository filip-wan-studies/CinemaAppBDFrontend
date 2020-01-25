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
                <div className="d-flex mb-3">
                    <div className="d-flex flex-row mb-3">
                        <div>
                            <img
                                src={this.props.film.imdb.Poster}
                                className="img-thumbnail img-small"
                                alt={this.props.film.imdb.Title}
                            />
                        </div>
                        <h3 className="m-3">Title: {this.props.film.imdb.Title}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps, { fetchFilm })(FilmInfo);
