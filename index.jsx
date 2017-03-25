import React from 'react'
import ReactDOM from 'react-dom'




class ComplimentMachine extends React.Component{
  render() {
    return (
      <div>
        <p>What's your name?</p>
        <p>{this.props.compliment}, {this.props.name}</p>
        <p>The time is {this.props.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

function giveCompliment(){
  ReactDOM.render(<ComplimentMachine compliment="You're awesome" name="abc" date={new Date()} />, document.getElementById('main'))
}

giveCompliment()
