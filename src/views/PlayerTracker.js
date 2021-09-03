import React, { Component } from 'react'
import axios from "axios";


class PlayerTracker extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerStats: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getPlayerId()
        console.log(this.state.playerName)
    }

    handleChange = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if(replace.length > 0){
            this.setState({playerName: replace})
        }else {
            alert("Please type player's name!")
        }
    }

    getPlayerId = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
        .then(async res => {
            // console.log(res.data.data)
            if(res.data.data[0] === undefined){
                alert('This player is injured or has not played.')
            } else if(res.data.data.length > 1){
                alert('Please specify name!')
            } else{
            await this.getPlayerStats(res.data.data[0].id)
            }

        }).catch(err => {
            console.log(err)
        })
    }

    getPlayerStats = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
        .then(async res => {
            console.log(res.data.data)
            this.setState({playerStats: res.data.data[0]})
        }).catch(err => {
            console.log(err)
        })
    }

    // componentDidMount(){
    //     this.getPlayerId()
    //     this.getPlayerStats()
    // }

    render() {
        return (
            <div className='container col-lg-6 col-md-4 col-sm-2 mt-3'>
                <h1>NBA Player Tracker</h1>
                <ui>
                    <form onSubmit = {this.handleSubmit}>
                        <label> 
                            <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Enter Player Name' />
                        </label>
                        <button className='btn btn-danger' type='submit'>Get Stats</button>
                    </form>
                    <div class="card text-white bg-primary mb-3 col-6" styleClass="max-width: 10rem;">
                        <div class="card-body">
                            Games Played: {this.state.playerStats['games_played']}
                            <br />
                            Points/Game: {this.state.playerStats['pts']}
                            <br />
                            Rbs/Game: {this.state.playerStats['reb']}
                            <br />
                            Asst/Game: {this.state.playerStats['ast']}
                        </div>
                    </div>

                </ui>
                {/* <img src='/img/4Uv5yyO.jpg' alt='nba' /> */}
            </div>
        )
    }
}

export default PlayerTracker