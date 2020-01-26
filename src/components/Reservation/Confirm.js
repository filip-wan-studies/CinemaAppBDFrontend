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
        console.log(this.props.reservation);
        return (
            <div>
                {this.state.redirect ? <Redirect push to="/" /> : ''}
                <button className="btn btn-danger" onClick={this.clickReturnButton}>
                    Back
                </button>
                <button className="btn btn-success" onClick={this.clickSubmitButton}>
                    Submit
                </button>
            </div>
        );
    }

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
