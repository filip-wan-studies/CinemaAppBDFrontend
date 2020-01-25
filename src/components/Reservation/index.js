import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';
import FilmInfo from './FilmInfo';
import LoadingSpinner from '../common/LoadingSpinner';
import '../../css/styleReservation.css';
import Seats from './Seats';
import Confirm from './Confirm';

class Reservation extends React.Component {
    render() {
        this.checkIfScreeningIsLoaded();

        if (_.isEmpty(this.props.screening)) {
            return <LoadingSpinner />;
        } else if (this.props.reservation.isReady) {
            return <Confirm />;
        } else {
            return (
                <div>
                    <FilmInfo id={this.props.screening.film.id} />
                    <Seats screening={this.props.screening} id={this.props.screening.id} />
                </div>
            );
        }
    }

    checkIfScreeningIsLoaded = () => {
        if (_.isEmpty(this.props.screening) || this.props.reservation.response !== undefined)
            this.props.fetchScreening(this.props.match.params.id);
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        screening: state.screenings[ownProps.match.params.id],
        reservation: state.reservation
    };
};

export default connect(mapStateToProps, { fetchScreening })(Reservation);
