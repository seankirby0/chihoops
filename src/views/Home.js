import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>ChiHoops Community</h1>
                <h5>The main community that brings together all aspects of Chicago Basketball in one place!</h5>
                <li className='list-group-item mt-3'>
                    <h4>Want to be a part of the Community?</h4>
                    <Link to="/register" className=" btn btn-primary mt-3">JOIN HERE</Link>
                </li>
                <a href="https://www.instagram.com/chihoops/" class="btn btn-info mt-3" role="button">Check us out on INSTAGRAM</a>
                {/* <img src='/img/IMG_7239.png' alt='ch' /> */}

            </div>
        )
    }
}
