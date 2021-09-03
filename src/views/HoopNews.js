import React, { Component } from 'react'
import NewsDetail from '../components/NewsDetail';
// import moment from 'moment';
// import { Link } from 'react-router-dom';


export default class HoopNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    posts: data.posts
                })
            })
                .catch(err => console.error(err))
    }

    render() {
        let posts = this.state.posts
        // if (posts) {
        //     posts.sort((a,b) =>  moment(a.date_created) < moment(b.date_created) ? 1: -1)
        // }
        return (
            <>
                <ul className='list-group mt-3'>
                    {posts.map((post, idx) => <NewsDetail post={post} key={idx} />)}
                </ul>
            </>
        )
    }
}
