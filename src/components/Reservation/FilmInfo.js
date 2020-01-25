import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import LoadingSpinner from '../common/LoadingSpinner';
import '../../css/styleReservation.css';

class FilmInfo extends React.Component {
    componentDidMount() {
        if (_.isEmpty(this.props.film) || this.props.id !== this.props.film.id) this.props.fetchFilm(this.props.id);
    }

    render() {
        return _.isEmpty(this.props.film) ? (
            <LoadingSpinner></LoadingSpinner>
        ) : (
            <div className="border-bottom border-danger">
                <div className="d-flex m-3">
                    <div className="d-flex flex-row">
                        <div>{this.renderImage()}</div>
                        <h3 className="m-3">Title: {this.props.film.title}</h3>
                    </div>
                </div>
            </div>
        );
    }

    renderImage = () =>
        this.props.film.imdb ? (
            <img
                src={this.props.film.imdb.Poster ? this.props.film.imdb.Poster : null}
                className="img-thumbnail img-small img-zoom"
                alt={this.props.film.imdb.Title}
            />
        ) : (
            ''
        );
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps, { fetchFilm })(FilmInfo);
