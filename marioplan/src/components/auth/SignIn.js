import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state);
    }
    render() {
        const {authError} = this.props
        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-4">Sign In</h5>
                    <div className="input-field">
                        <label className="active" htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email"/>
                    </div>

                    <div className="input-field">
                        <label className="active" htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password"/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    
                        <div className="red-text center">
                            {authError ? 
                            <p>{authError}</p> :
                            null }
                        </div>
                    </div>

                </form>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
