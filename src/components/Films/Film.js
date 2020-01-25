import React from 'react';
import { Link } from 'react-router-dom';

class Film extends React.Component {
    render() {
        return (
            <div className="card col-auto mb-3" style={{ width: '50%' }}>
                <Link to={'/film/' + this.props.film.id}>
                    <div className="col-sm-10 card-body">
                        <h5 className="mb-1">{this.props.film.title}</h5>
                        <h5 className="m-0" style={{float: 'right'}}>
                            <span className="text-warning">★</span> {'N/A'}                            
                        </h5>
                        <small className="text-white" style={{float: 'right'}}>IMDb Rating</small>
                        <p>
                            <small className="text-white">
                                {this.props.film.genre.name} | {this.props.film.screenings.length} screenigns
                            </small>
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Film;
