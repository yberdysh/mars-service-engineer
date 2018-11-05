import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: props.value
    }
  }

  componentWillReceiveProps(){
    const botLocations = this.props.botLocations
    const myCellLocation = {"X": this.props.currentRow, "Y": this.props.currentColumn}
    botLocations.forEach(location => {
      if (JSON.stringify(location) === JSON.stringify(myCellLocation)){
        this.setState({color: "#00F"})
      }
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}></div>
    );
  }
}
