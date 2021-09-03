import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NewsDetail extends Component {
    render() {
        const post = this.props.post
        return (
            <div className='col-lg-6 col-md-4 col-sm-2 mb-3'>
                <li className='list-group-item'>
                    <h5>{post.title}</h5>
                    <div>
                        {/* <p>{post.body}</p> */}
                        <Link to={`/posts/${post.id}`} className='btn btn-secondary mx-auto'>View Article</Link>
                    </div>
                </li>
            </div>
        )
    }
}

