import React from 'react'
import ReactDOM from 'react-dom'




class ComplimentMachine extends React.Component{
  render() {
    return (
      <div>
        <p>What's your name?</p>
        <p>{this.props.compliment}, {this.props.name}</p>
      </div>
    )
  }
}

ReactDOM.render(<ComplimentMachine compliment="You're awesome" name="abc" />, document.getElementById('main'))
