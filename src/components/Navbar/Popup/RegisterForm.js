import React from 'react';
import { connect } from 'react-redux';
import { popupToggleRegister } from '../../../actions';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    render() {
        return (
            <div>
                <form id="formLogin" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
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
                <div className="d-flex justify-content-around mt-4">
                    <button className="btn btn-light" onClick={e => this.props.popupToggleRegister(false)}>
                        Login
                    </button>
                    <button type="submit" form="formLogin" className="btn btn-danger">
                        Register
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
        let login = {
            email: this.state.email,
            password: this.state.password
        };
        console.log("You're trying to log in", login);
        event.persist();
    };
}

const mapStateToProps = state => {
    return { isRegisterToggled: state.popup.isRegisterToggled };
};

export default connect(mapStateToProps, { popupToggleRegister })(RegisterForm);
