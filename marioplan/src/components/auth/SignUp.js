import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

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
    }
    render() {
        const {auth} = this.props;
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

                </form>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(SignUp)
