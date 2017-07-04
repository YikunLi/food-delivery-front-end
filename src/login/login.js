/**
 * Created by liyikun on 2017/7/4.
 */
import React from 'react';
import './login.css'

class LoginComponent extends React.Component {

    constructor(props, context, update) {
        super(props, context, update);
        this.state = {
            phoneNumber: "",
            password: ""
        };
    }

    render() {
        return (
            <div style={styles.content}>
                <h3>Sign in</h3>
                <div>
                    <input type="text" id="login-phone-number" name="phone-number" className="material-input"
                           placeholder="Your Phone Number" value={this.state.phoneNumber}
                           onChange={this.handleChange.bind(this)}/>
                </div>
                <div>
                    <input type="password" id="login-password" name="password" className="material-input"
                           placeholder="Your Password" value={this.state.password}
                           onChange={this.handleChange.bind(this)}/>
                </div>
                <div style={styles.forget_password_contanier}>
                    <a href="">Forgot your password?</a>
                </div>
                <button className="material-button" onClick={this.login.bind(this)}>Sign in
                </button>
                <p>New to here？<a href="register">Create your free account</a></p>
            </div>
        );
    }

    handleChange(e) {
        if (e.target.id === "login-phone-number") {
            this.setState({phoneNumber: e.target.value});
        } else if (e.target.id === "login-password") {
            this.setState({password: e.target.value});
        }
    }

    login() {
        let request = new XMLHttpRequest();
        request.open("GET", `http://localhost:8080/login/test?phoneNumber=${this.state.phoneNumber}&password=${this.state.password}`);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                console.log(request.response);
            }
        }
        request.send();
    }
}

export default LoginComponent;

var styles = {
    content: {
        margin: '0 auto',
        'text-align': 'center'
    },
    forget_password_contanier: {
        margin: '5px',
    },
};