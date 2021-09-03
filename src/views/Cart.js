import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h1 className='mt-3'>Your Gym Bag</h1>
                {/* <li className='list-group-item mt-3'>
                    <div>
                        <h3>Year of the Ox</h3>
                        <h4>$65</h4>
                        <img src='https://images.squarespace-cdn.com/content/v1/60b529c13fc94d2e77bdb2f3/1628037358928-7HVIDJCN5P611SWHQVEH/yearofox.jpg?format=750w' alt='Ox' />
                    </div>
                    <Link to='/store'  className='btn btn-danger mt-3'>Remove</Link>
                </li>  
                <li>
                    <h3>Total Cost: $65</h3>
                </li>  */}
            </div>
        )
    }
}
