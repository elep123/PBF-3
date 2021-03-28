import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <h3>TUGAS 3</h3>
                <div className='cardbox'>
                    <h3>FORM LOGIN ALIEF</h3>
                    <label className="username">Username <input className="inputData" type="text" placeholder="Username"/></label>
                    <label className="password">Password <input className="inputData" type="password" placeholder="Password"/></label>
                    <button className="btn-login">Login</button>
                    <label><input type="checkbox" className="check"/> Remember Me</label>
                    <button className="btn-cancel">Cancel</button>
                </div>
            </div>
        )
    }
}
