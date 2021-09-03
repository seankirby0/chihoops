import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Store extends Component {
    constructor(){
        super();

        this.state = {
            product: [],
            cart: []
        }
        }


        addToCart = (product) =>{
            console.log('ADDED TO CART');
        this.setState({
            cart: [...this.state.cart, product]
        })
        }

        sumCartProducts = (cartList) => {
        let total = 0;
        for (let i = 0; i < cartList.length; i++){
            total += cartList[i].cost
        }
        return total.toFixed(2)
        }

        removeFromCart = (product) =>{
        let newCart = [...this.state.cart]

        for (let i = 0; i < newCart.length; i++){
            if (product === newCart[i]){
            newCart.splice(i, 1)
            break;
            }
        }
        this.setState({
            cart: newCart
        })
        }


        handleSubmit = (e) => {
        e.preventDefault();
        let year = e.target.yearInput.value;
        let round = e.target.roundInput.value;
        fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
            this.setState(
                {racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings}
            )
            })
        }


        handleLogin = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        fetch('http://localhost:5000/api/tokens', {
            method: 'POST',
            headers: {
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
            this.addMessage('You are now logged in', 'success')
            this.setState({
            isLoggedIn: true
            })
        })
        }

        logUserOut = () =>{
        localStorage.removeItem('token')
        this.setState({
            isLoggedIn: false
        })
    }
    render() {



        return (
            <div className="col-lg-6 col-md-4 col-sm-2 mb-3">
                <header>
                    <Link to="/cart" className="btn btn-warning mt-3 mb-3 ml-3">View Cart</Link>
                </header>
                <h1>ChiHoops Store</h1>
                    <li className='list-group-item mt-3'>
                        <div>
                            <h3>Cali Breeze</h3>
                            <h4>$65</h4>
                            <img src='https://images.squarespace-cdn.com/content/v1/60b529c13fc94d2e77bdb2f3/1626403210575-P55WX5SA5OFLA43M17KR/C8AE3411-4BCC-4A6E-9696-7D2C8647AE56?format=1500w' alt='Cali' styleClass='width: 50%' />
                            <button onClick={() => this.addToCart(this.product)} className='btn btn-primary mt-3'>Add to Cart</button>
                        </div>
                    </li>  
                    <li className='list-group-item mt-3'>  
                        <div>
                            <h3>Windy City Nights</h3>
                            <h4>$65</h4>
                            <img src='https://images.squarespace-cdn.com/content/v1/60b529c13fc94d2e77bdb2f3/1622568853837-JZ84OKGESMFKC5BCO5LE/052021_Nothing+Major-43.jpg?format=750w' alt='City' />
                            <button onClick={() => this.addToCart(this.product)} className='btn btn-primary mt-3'>Add to Cart</button>
                        </div>
                        </li>  
                    <li className='list-group-item mt-3'>
                        <div>
                            <h3>Year of the Ox</h3>
                            <h4>$65</h4>
                            <img src='https://images.squarespace-cdn.com/content/v1/60b529c13fc94d2e77bdb2f3/1628037358928-7HVIDJCN5P611SWHQVEH/yearofox.jpg?format=750w' alt='Ox' />
                            <button onClick={() => this.addToCart(this.product)} className='btn btn-primary mt-3'>Add to Cart</button>
                        </div>
                    </li>  
            </div>
        )
    }
}
