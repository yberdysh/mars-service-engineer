import React, { Component } from 'react';
import {initialGrid} from '../initialGrid.js'
import Cell from './Cell'
import Row from './Row'

export default class Grid extends Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      botLocations: []
    }
  this.startBotCollection = this.startBotCollection.bind(this)
  this.genMatrix = this.genMatrix.bind(this)
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
        .then(bots => {
          bots = bots["Bots"]
          const botLocations = bots.map(bot => bot["Location"])
          this.setState({bots, botLocations})
        })
      }, 1000)
  }

  genMatrix(){
    return this.props.values.map((rowVals, idx) => <div ><Row rowVals={rowVals} currentRow={idx + 1} demBots={this.state.bots} botLocations={this.state.botLocations} /></div>)
  }

  render() {
    // console.log("grid state", this.state)
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
