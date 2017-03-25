import React from 'react'
import ReactDOM from 'react-dom'




var ComplimentMachine = React.createClass({
  render: function() {
    return (
      <div>
        <p>What's your name?</p>
        <p>{this.props.compliment}, {this.props.name}</p>
      </div>
    )
  }
})

ReactDOM.render(<ComplimentMachine compliment="You're awesome" name="abc"/>, document.getElementById('main'))
