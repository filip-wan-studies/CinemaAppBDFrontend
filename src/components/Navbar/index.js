import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePopup } from '../../actions';
import '../../css/styleNavbar.css';
import Popup from './Popup';

class Navbar extends React.Component {
    render() {
        console.log(this.props.popup);
        return (
            <div>
                <nav className="navbar sticky-top">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1">Best Cinema</span>
                    </Link>
                    <div>
                        <button onClick={this.onClickButtonLogin} className="btn btn-dark">
                            Login
                        </button>
                    </div>
                </nav>
                <p></p>
                {this.props.popup.isToggled ? <Popup /> : ''}
            </div>
        );
    }

    onClickButtonLogin = e => {
        this.props.togglePopup(true);
    };
}

const mapStateToProps = state => {
    return {
        popup: state.popup
    };
};

export default connect(mapStateToProps, { togglePopup })(Navbar);
