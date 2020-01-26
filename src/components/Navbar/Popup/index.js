import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { togglePopup } from '../../../actions';
import '../../../css/stylePopup.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Popup extends React.Component {
    render() {
        console.log(this.props.popup);
        return (
            <div className="popup">
                <div className="popup_inner card  text-white bg-dark">
                    <div className="mr-3 mt-2">
                        <button
                            type="button"
                            className="close text-danger"
                            aria-label="Close"
                            onClick={this.onClickButtonClosePopup}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        {this.props.popup.isRegisterToggled ? <RegisterForm /> : <LoginForm />}
                    </div>
                </div>
            </div>
        );
    }

    onClickButtonClosePopup = e => {
        this.props.togglePopup(false);
    };
}

const mapStateToProps = state => {
    return {
        popup: state.popup
    };
};

export default connect(mapStateToProps, { togglePopup })(Popup);
