import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/styleFilm.css';

class Film extends React.Component {
    render() {
        return (
            <aaa className="w3-card col-auto mb-3" style={{ width: '50%'}}>
                <Link to={'/film/' + this.props.film.id}>
                    <div className="col-sm-10 card-body">
                        <h51 className="mb-1">{this.props.film.title}</h51>
                        <p>
                            <small className="text-muted">
                                {this.props.film.genre.name} | {this.props.film.screenings.length} screenigns
                            </small>
                        </p>
                    </div>
                </Link>
            </aaa>
        );
    }
}

export default Film;
