import React from 'react';
import { connect } from 'react-redux';
import { reserveSeat, reserveSeatCancel, reservationClear, postReservation } from '../../actions';

class Seats extends React.Component {
    componentDidMount() {
        this.props.reservationClear();
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center m-3">
                    <div className="border border-danger flex-column p-3 seats">{this.renderSeats()}</div>
                </div>
                <button className="btn btn-success" onClick={this.clickSeatSubmit}>
                    Submit
                </button>
            </div>
        );
    }

    renderSeats() {
        console.log('reservation: ', this.props.reservation);
        let seatsArr = [];
        this.props.screening.room.seats.forEach(s => {
            if (seatsArr[s.rowNumber - 1] === undefined) seatsArr[s.rowNumber - 1] = [];
            seatsArr[s.rowNumber - 1][s.seatNumber - 1] = s;
        });

        return seatsArr.map(row => (
            <div key={row[0].rowNumber} className="flex-row">
                {row.map(s => (
                    <button
                        className={s.isReserved ? 'm-1 btn btn-secondary disabled' : 'm-1 btn btn-light'}
                        onClick={this.clickSeatButton}
                        value={s.isReserved ? s.isReserved : s.id}
                        type="button"
                        id={s.id}
                        key={s.id}
                    >
                        {s.id}
                    </button>
                ))}
            </div>
        ));
    }

    clickSeatButton = e => {
        if (e.target.value === 'true') return;
        if (e.target.className === 'm-1 btn btn-danger') {
            this.props.reserveSeatCancel(this.props.screening.id, parseInt(e.target.value));
            e.target.className = 'm-1 btn btn-light';
        } else {
            this.props.reserveSeat(this.props.screening.id, parseInt(e.target.value));
            e.target.className = 'm-1 btn btn-danger';
        }
    };
    clickSeatSubmit = e => {
        this.props.postReservation({
            Email: 'a@b.c',
            SeanceId: this.props.screening.id,
            seats: this.props.reservation.seats
        });
    };
}

const mapStateToProps = state => {
    return {
        reservation: state.reservation
    };
};

export default connect(mapStateToProps, { reserveSeat, reserveSeatCancel, reservationClear, postReservation })(Seats);
