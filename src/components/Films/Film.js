import React from 'react';
import { Link } from 'react-router-dom';

class Film extends React.Component {
    render() {
        return (
            <div className="card col-auto mb-3" style={{ width: '50%' }}>
                <Link to={'/film/' + this.props.film.title}>
                    <div className="col-sm-10 card-body">
                        <h5 className="mb-1">{this.props.film.title}</h5>
                        <p>
                            <small className="text-muted">
                                {this.props.film.genreNavigation.name} | {this.props.film.screenings.length} screenigns
                            </small>
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Film;
