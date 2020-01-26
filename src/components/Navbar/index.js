import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePopup, checkToken, logout } from '../../actions';
import '../../css/styleNavbar.css';
import Popup from './Popup';

class Navbar extends React.Component {
    componentDidMount() {
        this.props.checkToken();
    }

    render() {
        console.log(this.props.auth);
        return (
            <div>
                <nav className="navbar sticky-top">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1">Best Cinema</span>
                    </Link>
                    <div>{this.renderLoginButton()}</div>
                </nav>
                <p></p>
                {this.props.popup.isToggled ? <Popup /> : ''}
            </div>
        );
    }

    renderLoginButton = () => {
        if (!this.props.auth.isLoggedIn) {
            return (
                <button onClick={this.onClickButtonLogin} className="btn btn-dark">
                    Login
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.logout()} className="btn btn-dark">
                    Log Out ({this.props.auth.email} - {this.props.auth.name} {this.props.auth.surname})
                </button>
            );
        }
    };

    onClickButtonLogin = e => {
        this.props.togglePopup(true);
    };
}

const mapStateToProps = state => {
    return {
        popup: state.popup,
        auth: state.auth
    };
};

export default connect(mapStateToProps, { togglePopup, checkToken, logout })(Navbar);
