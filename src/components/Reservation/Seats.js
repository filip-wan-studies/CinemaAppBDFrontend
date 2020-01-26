import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {
    reserveSeat,
    reserveSeatCancel,
    reservationClear,
    confirmReservation,
    confirmReservationForUser
} from '../../actions';

class Seats extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
    }

    componentDidMount() {
        //if (this.props.reservation === undefined) return;
        if (
            this.props.reservation.seanceId !== this.props.screening.id ||
            this.props.reservation.response !== undefined
        )
            this.props.reservationClear();
        else if (this.props.reservation.Email !== undefined) this.setState({ email: this.props.reservation.Email });
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-center m-3 flex-column">
                    <div className="border border-danger p-3 seats">{this.renderSeats()}</div>
                    <div className="d-flex flex-row align-items-center p-3">
                        {this.renderEmailInput()}
                        <button className="btn btn-success ml-5" onClick={this.clickNextButton}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    renderEmailInput() {
        if (!this.props.auth.isLoggedIn) {
            return (
                <div className="mr-5">
                    <label htmlFor="emailInput" className="col-form-label">
                        Email adress
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email adress"
                        required
                    />
                </div>
            );
        }
    }

    renderSeats() {
        let seatsArr = [];
        this.props.screening.screenseats.forEach(s => {
            if (seatsArr[s.seat.rowNumber - 1] === undefined) seatsArr[s.seat.rowNumber - 1] = [];
            seatsArr[s.seat.rowNumber - 1][s.seat.seatNumber - 1] = s;
        });

        return seatsArr.map(row => (
            <div key={row[0].seat.rowNumber} className="flex-row">
                {row.map(s => (
                    <button
                        className={this.seatClass(s)}
                        onClick={this.clickSeatButton}
                        value={s.id}
                        type="button"
                        id={s.id}
                        key={s.id}
                    >
                        {s.seat.rowNumber + '-' + s.seat.seatNumber}
                    </button>
                ))}
            </div>
        ));
    }

    seatClass = seat => {
        if (seat.isReserved) return 'm-1 btn btn-secondary disabled';

        if (this.props.reservation.seats.some(s => s.SeatId === seat.id)) return 'm-1 btn btn-danger';

        return 'm-1 btn btn-light';
    };

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    clickSeatButton = e => {
        const seat = this.props.screening.screenseats.find(s => s.id === parseInt(e.target.value));

        if (!seat || seat.isReserved === true) return;

        if (this.props.reservation !== undefined && this.props.reservation.seats.some(s => s.SeatId === seat.id)) {
            this.props.reserveSeatCancel(this.props.screening.id, seat.id);
        } else {
            this.props.reserveSeat(this.props.screening.id, seat.id);
        }
    };

    clickNextButton = e => {
        console.log(
            this.state.email,
            !_.isEmpty(this.props.reservation.seats),
            this.props.auth.isLoggedIn,
            this.props.auth.id
        );
        if (!_.isEmpty(this.props.reservation.seats) && (this.state.email !== '' || this.props.auth.isLoggedIn))
            this.props.auth.isLoggedIn
                ? this.props.confirmReservationForUser(this.props.auth.id)
                : this.props.confirmReservation(this.state.email);
    };
}

const mapStateToProps = state => {
    return {
        reservation: state.reservation,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {
    reserveSeat,
    reserveSeatCancel,
    reservationClear,
    confirmReservation,
    confirmReservationForUser
})(Seats);
