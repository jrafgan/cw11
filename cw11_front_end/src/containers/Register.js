import React, {Component} from 'react';
import {registerUser} from "../store/actions/usersActions";
import {connect} from 'react-redux';
import FormElement from "../components/UI/FormElement";

class Register extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitFormHandler = e => {
        e.preventDefault();
        this.props.registerUser({...this.state});
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (<div className="main_register_div">
                <div className="register_div">
                    <h2>Register New User</h2>
                    {this.props.error && this.props.error.global && (
                        <div>{this.props.error.global}
                        </div>
                    )}
                    <form onSubmit={this.submitFormHandler} className="form">
                        <FormElement
                            propertyName="username"
                            title="Username"
                            type="text"
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldError('title')}
                            placeholder="Enter your desired username"
                            autocomplete="new-username"
                        />
                        <FormElement
                            propertyName="password"
                            title="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldError('password')}
                            placeholder="Enter new secure password"
                            autocomplete="new-password"
                        />
                        <div>
                            <button type="submit" className="submit_btn">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    error: state.users.registerError,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);