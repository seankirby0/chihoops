import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Login extends Component {
    render() {
        return (
            <body>
                <div>
                    <h2 className='mt-3'>Welcome Back to ChiHoops!</h2>
                    <form onSubmit={this.props.handleLogIn}>
                        <div className='form-group col-4'>
                            <fieldset>
                                <label htmlFor='username'></label>
                                <input type='text' name='username' className='form-control' placeholder='Username'></input>
                            </fieldset>
                            <fieldset>
                                <label htmlFor='password'></label>
                                <input type='password' name='password' className='form-control' placeholder='Password'></input>
                            </fieldset>
                            <input type='submit' className='btn btn-outline-danger mt-3' value='Log In'></input>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className='mt-3'>Not a Part of the ChiHoops Community?</h3>
                    <Link to='/register' className='btn btn-outline-primary mt-3'>JOIN HERE!</Link>
                </div>
            </body>
        )
    }
}
