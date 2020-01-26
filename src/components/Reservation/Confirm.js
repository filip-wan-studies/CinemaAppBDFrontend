import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { unconfirmReservation, postReservation } from '../../actions';

class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect push to="/" /> : ''}
                <div className="confirm-info">
                    <div className="card text-white bg-dark m-3">
                        <div className="card-body">
                            <h5 className="card-title">Film info: </h5>
                            <p className="card-text">Film: {this.props.screening.film.title}</p>
                            <p className="card-text">Date: {this.props.screening.screeningDate.toLocaleString()}</p>
                            {this.props.reservation.Email !== undefined ? (
                                <p className="card-text">Email: {this.props.reservation.Email}</p>
                            ) : (
                                ''
                            )}
                            <h5 className="card-title">Chosen seats: </h5>
                            {this.renderSeats()}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between m-3">
                        <button className="btn btn-danger" onClick={this.clickReturnButton}>
                            Back
                        </button>
                        <button className="btn btn-success" onClick={this.clickSubmitButton}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    renderSeats = () => {
        return this.props.reservation.seats.map(s => {
            const seat = this.props.screening.screenseats.find(se => se.id == s.SeatId).seat;
            return (
                <p key={s.SeatId} className="card-text">
                    Row - {seat.rowNumber}, Seat - {seat.seatNumber}
                </p>
            );
        });
    };

    clickSubmitButton = async e => {
        await this.props.postReservation(this.props.reservation);
        this.setState({ redirect: true });
        this.props.unconfirmReservation();
    };

    clickReturnButton = e => {
        this.props.unconfirmReservation();
    };
}

const mapStateToProps = state => {
    return {
        reservation: state.reservation
    };
};

export default connect(mapStateToProps, { unconfirmReservation, postReservation })(Confirm);
