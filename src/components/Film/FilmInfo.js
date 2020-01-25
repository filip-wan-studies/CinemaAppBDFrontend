import React from 'react';
import { connect } from 'react-redux';
import '../../css/styleFilms.css';

class FilmInfo extends React.Component {
    render() {
        if (this.props.film)
            if (this.props.film.imbd !== null)
            {
                return (
                    <div className="media-body col-sm-8 col-sm-offset-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h1 className="mt-0">{this.props.film.imdb.Title}</h1>
                            <div className="d-flex flex-column align-items-center">
                                <h2 className="m-0">
                                    <span className="text-warning">★</span> {this.props.film.imdb.imdbRating}
                                </h2>
                                <small className="text-muted">IMDb Rating</small>
                            </div>
                        </div>
                        <p className="text-justify mb-5">{this.props.film.imdb.Plot}</p>
                        <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Genre</th>
                                    <td>{this.props.film.imdb.Genre}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Year</th>
                                    <td>{this.props.film.imdb.Year}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Runtime</th>
                                    <td>{this.props.film.imdb.Runtime}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Director</th>
                                    <td>{this.props.film.imdb.Director}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Writer</th>
                                    <td>{this.props.film.imdb.Writer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Actors</th>
                                    <td>{this.props.film.imdb.Actors}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Country</th>
                                    <td>{this.props.film.imdb.Country}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Production</th>
                                    <td>{this.props.film.imdb.Production}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }
            else
            {
                //Gdy nie znaleziono filmu w bazie imbd jak wyświetlic i tytuł z naszej bazy? Na przykład #/film/34
                return (
                    <div className="media-body col-sm-8 col-sm-offset-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h1 className="mt-0">{this.props.film.Title}</h1>
                            <div className="d-flex flex-column align-items-center">
                                <h2 className="m-0">
                                    <span className="text-warning">★</span> N/A
                                </h2>
                                <small className="text-muted">IMDb Rating</small>
                            </div>
                        </div>
                        <p className="text-justify mb-5">N/A</p>
                        <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Genre</th>
                                    <td>{this.props.film.Genre}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Year</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Runtime</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Director</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Writer</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Actors</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Country</th>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <th scope="row">Production</th>
                                    <td>N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }   
        else return <div />;
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps)(FilmInfo);
