import React from 'react';
import { connect } from 'react-redux';
import { clearScreenings } from '../../actions';
import Screening from './Screening';

class Screenings extends React.Component {
    componentDidMount() {
        this.props.clearScreenings();
    }
    render() {
        return (
            <div className="media-body col-sm-2 col-sm-offset-2">
                <div>{this.renderPoster()}</div>
                <div>{this.renderScreenings()}</div>
            </div>
        );
    }

    renderPoster = () => {
        if (this.props.film.imdb.Poster !== 'N/A')
            return <img src={this.props.film.imdb.Poster} className="img-thumbnail" alt={this.props.film.imdb.Title} />;
    };

    renderScreenings = () => {
        if (this.props.film.screenings.length === 0) return;
        return this.props.film.screenings.map(s => <Screening key={s.id} id={s.id} />);
    };
}

const mapStateToProps = state => {
    return { film: state.film };
};
export default connect(mapStateToProps, { clearScreenings })(Screenings);
