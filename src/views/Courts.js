import React, { Component } from 'react'

export default class Courts extends Component {
    render() {
        return (
            <div className='col-lg-6 col-md-4 col-sm-2 mb-3'>
                <h2 className='mt-3'>Chicago Basketball Courts</h2>
                <p>Find te best places to play outdoor ball in the city right here!</p>
                <li className='list-group-item mt-3'>
                    <div>
                        <img src='data:image/jpeg;base64,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' alt='foster'/>
                        <h3>Foster Beach</h3>
                        <p>Can't get better than playing ball with a beautiful beach-lake view! Courts are recently renovated with new black top and two and a half courts. Easily the best location to play right now!</p>
                    </div>
                    <a href="https://goo.gl/maps/8T94gkeoDu8tGg8M7" class="btn btn-primary" role="button">See Map</a>
                    {/* <button className='btn btn-primary mt-3'>See Map</button> */}
                </li>  
                <li className='list-group-item mt-3'>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasW47jEV01Ft3k6r08N8yd2ypfnQxn_f1wg&usqp=CAU' alt='lps' />
                        <h3>Lincoln Park South</h3>
                        <p>Right in the middle of every recreational activity here you can get some shots up before your game or even stay for some 5v5 action. Afterwards you can take the walking bridge over LSD to cool off in Lake Michigan! </p>
                    </div>
                    <a href="https://goo.gl/maps/SaafF3QvoBxBLVvN8" class="btn btn-primary" role="button">See Map</a>
                    {/* <button className='btn btn-primary mt-3'>See Map</button> */}
                </li>  
            </div>
        )
    }
}
