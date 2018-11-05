import React, { Component } from 'react';
import {initialGrid} from '../initialGrid.js'
import Cell from './Cell'
import Row from './Row'

export default class Grid extends Component {
  constructor(){
    super()
    this.state = {
      bots: []
    }
  this.startBotCollection = this.startBotCollection.bind(this)
  this.genMatrix = this.genMatrix.bind(this)
  this.getBotLocations = this.getBotLocations.bind(this)
  }

  componentDidMount(){
    this.startBotCollection()
  }

  componentWillUnmount(){
    clearInterval(this.startBotCollection)
  }

  startBotCollection(){
    setInterval(() => {
      fetch("http://headlight-tournament-2.herokuapp.com/bots")
        .then(res => res.json())
        .then(bots => this.setState({bots: bots["Bots"]}))
      }, 1000)
  }

  genMatrix(){
    return this.props.values.map((rowVals, idx) => <div ><Row rowVals={rowVals} currentRow={idx + 1} demBots={this.state.bots} getBotLocations={this.getBotLocations} /></div>)
  }

  getBotLocations(){
    const initialValues = this.props.values
    const bots = this.state.bots
    const botLocations = bots.map(bot => bot["Location"])
    return botLocations

  }


  render() {
    console.log("locationsssss", this.getBotLocations())
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    );
  }
}

Grid.defaultProps = {
  values: initialGrid
}
