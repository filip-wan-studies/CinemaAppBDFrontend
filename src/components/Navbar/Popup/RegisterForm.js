import React from 'react';
import { connect } from 'react-redux';
import { togglePopup, popupToggleRegister, postClient } from '../../../actions';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', firstName: '', lastName: '', phone: '' };
    }

    render() {
        return (
            <div className="card-body m-2">
                <form id="formRegister" onSubmit={this.handleSubmit}>
                    <h1 className="card-title mb-4">Register</h1>
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

                    <div className="form-group row">
                        <label htmlFor="firstNameInput" className="col-sm-3 col-form-label">
                            First name
                        </label>
                        <div className="col-sm-9">
                            <input
                                type="firstname"
                                className="form-control"
                                min="2"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                id="firstNameInput"
                                placeholder="First name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastNameInput" className="col-sm-3 col-form-label">
                            Last name
                        </label>
                        <div className="col-sm-9">
                            <input
                                type="lastname"
                                className="form-control"
                                min="2"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                id="lastNameInput"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phoneInput" className="col-sm-3 col-form-label">
                            Phone
                        </label>
                        <div className="col-sm-9">
                            <input
                                type="tel"
                                className="form-control"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                id="phoneInput"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-around mt-4">
                    <button className="btn btn-light" onClick={e => this.props.popupToggleRegister(false)}>
                        Login
                    </button>
                    <button type="submit" form="formRegister" className="btn btn-danger">
                        Register
                    </button>
                </div>
            </div>
        );
    }

    ensurePhoneValidity = number => {
        const slices = number.split('-');
        let phone = slices.join('').slice(0, 9);
        if (phone.length > 3) {
            phone = phone.slice(0, 3) + '-' + phone.slice(3, 9);
        }
        if (phone.length > 7) {
            phone = phone.slice(0, 7) + '-' + phone.slice(7, 10);
        }
        return phone;
    };

    handleChange = event => {
        switch (event.target.id) {
            case 'emailInput':
                this.setState({ email: event.target.value });
                break;

            case 'passwordInput':
                this.setState({ password: event.target.value });
                break;

            case 'firstNameInput':
                this.setState({ firstName: event.target.value });
                break;

            case 'lastNameInput':
                this.setState({ lastName: event.target.value });
                break;

            case 'phoneInput':
                const number = this.ensurePhoneValidity(event.target.value);
                this.setState({ phone: number });
                break;

            default:
                break;
        }
    };

    handleSubmit = async event => {
        let registration = {
            Email: this.state.email,
            Secret: this.state.password,
            Name: this.state.firstName,
            Surname: this.state.lastName,
            PhoneNumber: parseInt(this.state.phone.split('-').join(''))
        };
        console.log("You're trying to register", registration);
        await this.props.postClient(registration);
        if (this.props.response.status === 200) {
            this.props.togglePopup(false);
            this.props.popupToggleRegister(false);
        } else alert('Podany Email już istnieje');
        event.persist();
    };
}

const mapStateToProps = state => {
    return { popup: state.popup, response: state.client.response };
};

export default connect(mapStateToProps, { togglePopup, popupToggleRegister, postClient })(RegisterForm);
