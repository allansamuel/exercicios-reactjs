import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastname: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }
    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to="/" />

        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-4">Sign Up</h5>
                    <div className="input-field">
                        <label className="active" htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email"/>
                    </div>

                    <div className="input-field">
                        <label className="active" htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password"/>
                    </div>

                    <div className="input-field">
                        <label className="active" htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} type="text" id="firstName"/>
                    </div>

                    <div className="input-field">
                        <label className="active" htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} type="text" id="lastName"/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>

                </form>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
