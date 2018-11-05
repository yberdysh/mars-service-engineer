import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: props.value
    }
  }

  componentDidMount(){
    console.log("locations", this.props.getBotLocations())
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}></div>
    );
  }
}
