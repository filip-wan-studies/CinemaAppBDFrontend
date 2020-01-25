import React from 'react';
import { connect } from 'react-redux';
import { unconfirmReservation, postReservation } from '../../actions';

class Confirm extends React.Component {
    render() {
        console.log(this.props.reservation);
        return (
            <div>
                <button className="btn btn-danger" onClick={this.clickReturnButton}>
                    Back
                </button>
                <button className="btn btn-success" onClick={this.clickSubmitButton}>
                    Submit
                </button>
            </div>
        );
    }

    clickSubmitButton = e => {
        this.props.postReservation(this.props.reservation);
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
