import React, { Component } from 'react'

const username = 'ivp'
const password = 'ivp'

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        loading: false,
    }

    login = (username, password) => fetch('http://localhost:3005/api/login',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => res.json())

    handleUsernameChange = (e) => this.setState({ username: e.target.value })
    handlePasswordChange = (e) => this.setState({ password: e.target.value })
    handleLogin = () => {
            this.setState({loading: true, error: null})
            this.login(this.state.username, this.state.password)
            .then(res => {
                if (res.status === 'success') {
                    this.props.onLogin();
                } else this.setState({ error: 'Username and Password mismatch', loading:false })
            })
    }


    render() {
        const { onLogin } = this.props;
        return <div>
            < h2 > Emails Login </h2 > <br />

            Username: <input type="text" minLength="3" onChange={this.handleUsernameChange} /> <br />
            Password: <input type="password" minLength="6" onChange={this.handlePasswordChange} /> <br />
            <button onClick={this.handleLogin}>Login</button>
            {this.state.loading && <div>Loading ...</div>}
            {this.state.error && <div>{this.state.error}</div>}
        </div >
    }
}

export default LoginForm