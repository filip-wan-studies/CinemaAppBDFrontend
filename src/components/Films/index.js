import React from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions';
import Film from './Film';

class Films extends React.Component {
    componentDidMount() {
        this.props.fetchFilms();
    }
    render() {
        return (
            <div className="d-flex flex-column align-items-center position-relative pb-5 row">{this.renderList()}</div>
        );
    }

    renderList = () => {
        if (!this.props.films) return <div />;
        return this.props.films.map(f => {
            if (f.screenings.length > 0) return <Film key={f.id} film={f} />;
            else return '';
        });
    };

    renderFilm = film => {
        return (
            <div className="col-sm-10">
                <h5 className="mb-1">{film.title}</h5>
                <p>
                    <small className="text-muted">{film.genre.name}</small>
                </p>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { films: state.films };
};

export default connect(mapStateToProps, { fetchFilms })(Films);
