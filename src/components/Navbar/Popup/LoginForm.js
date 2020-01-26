import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { togglePopup, popupToggleRegister, login } from '../../../actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    render() {
        return (
            <div className="card-body m-2">
                <form id="formLogin" onSubmit={this.handleSubmit}>
                    <h1 className="card-title mb-4">Login</h1>
                    <div className="form-group row">
                        <label htmlFor="firstNameInput" className="col-sm-3 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-9">
                            <input
                                type="email"
                                className="form-control"
                                min="2"
                                value={this.state.email}
                                onChange={this.handleChange}
                                id="emailInput"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastNameInput" className="col-sm-3 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-9">
                            <input
                                type="password"
                                className="form-control"
                                min="2"
                                value={this.state.password}
                                onChange={this.handleChange}
                                id="passwordInput"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-around m-4">
                    <button className="btn btn-light" onClick={e => this.props.popupToggleRegister(true)}>
                        Register
                    </button>
                    <button type="submit" form="formLogin" className="btn btn-danger">
                        Login
                    </button>
                </div>
            </div>
        );
    }

    handleChange = event => {
        switch (event.target.id) {
            case 'emailInput':
                this.setState({ email: event.target.value });
                break;

            case 'passwordInput':
                this.setState({ password: event.target.value });
                break;

            default:
                break;
        }
    };

    handleSubmit = async event => {
        let credentials = {
            Email: this.state.email,
            Secret: this.state.password
        };
        console.log("You're trying to log in", credentials);
        await this.props.login(credentials);

        if (!_.isEmpty(this.props.auth)) this.props.togglePopup(false);
        else alert('Niepoprawne dane logowania');
        event.persist();
    };
}

const mapStateToProps = state => {
    return { isRegisterToggled: state.popup.isRegisterToggled, auth: state.auth };
};

export default connect(mapStateToProps, { togglePopup, popupToggleRegister, login })(LoginForm);
