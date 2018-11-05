import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Row extends Component {
  genRow(vals){
    return vals.map((val, idx) => <Cell key={idx} value={val} currentColumn={idx + 1} currentRow={this.props.currentRow} demBots={this.props.demBots} botLocations={this.props.botLocations}/>)
  }

  render() {
    return (
      <div className="row">{this.genRow(this.props.rowVals)}</div>
    );
  }
}

