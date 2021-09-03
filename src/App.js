import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import About from './views/About';
import Courts from './views/Courts';
import HoopNews from './views/HoopNews';
import Store from './views/Store';
import SingleNews from './views/SingleNews';
import PlayerTracker from './views/PlayerTracker';
import Users from './views/Users';
import Register from './views/Register';
import Login from './views/Login';
import SingleUser from './views/SingleUser';
import Cart from './views/Cart';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          {/* <img  src='/img/IMG_7239.png' styleClass='background-image' /> */}
          <Switch>
            <Route exact path='/' render={ ()=> <Home/> }/>
            <Route exact path='/about' render={ ()=> <About/> }/>
            <Route exact path='/courts' render={ ()=> <Courts/> }/>
            <Route exact path='/hoopnews' render={ ()=> <HoopNews/> }/>
            <Route exact path='/playertracker' render={ ()=> <PlayerTracker/> }/>
            <Route exact path='/users' render={ ()=> <Users/> }/>
            <Route exact path='/register' render={ ()=> <Register/> }/>
            <Route exact path='/store' render={ ()=> <Store/> }/>
            <Route exact path='/cart' render={ ()=> <Cart/> }/>

            <Route exact path='/posts/:id'component={SingleNews} />
            <Route exact path='/users/:id'component={SingleUser} />
            <Route exact path='/login'>
              <Login handlelogIn={this.handlelogIn} />
            </Route>


          </Switch>
        </div>


      </div>
    )
  }
}
