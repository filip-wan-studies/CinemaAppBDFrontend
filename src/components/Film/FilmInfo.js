import React from 'react';
import { connect } from 'react-redux';

class FilmInfo extends React.Component {
    render() {
        if (this.props.film)
            return (
                <div className="media row my-5 justify-content-center">
                    <div className="media-body col-sm-8 col-sm-offset-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h1 className="mt-0">{this.props.film.Title}</h1>
                            <div className="d-flex flex-column align-items-center">
                                <h2 className="m-0">
                                    <span className="text-warning">★</span> {this.props.film.imdbRating}
                                </h2>
                                <small className="text-muted">IMDb Rating</small>
                            </div>
                        </div>
                        <p className="text-justify mb-5">{this.props.film.Plot}</p>
                        <table className="table table-hover">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Genre</th>
                                    <td>{this.props.film.Genre}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Year</th>
                                    <td>{this.props.film.Year}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Runtime</th>
                                    <td>{this.props.film.Runtime}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Director</th>
                                    <td>{this.props.film.Director}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Writer</th>
                                    <td>{this.props.film.Writer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Actors</th>
                                    <td>{this.props.film.Actors}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Country</th>
                                    <td>{this.props.film.Country}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Production</th>
                                    <td>{this.props.film.Production}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="media-body col-sm-2">
                        <img src={this.props.film.Poster} className="img-thumbnail" alt={this.props.film.Title} />
                    </div>
                </div>
            );
        else return <div />;
    }

    renderInfoList() {}
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps)(FilmInfo);
