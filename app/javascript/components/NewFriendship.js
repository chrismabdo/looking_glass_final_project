import React from 'react'

class NewFriendship extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'hi'
    }
  }

  clickHandler() {
    this.setState({
      message: 'Goodbye!'
    })
    console.log(this)
  }

  handleSubmit = (event) => {
    let that =  this
    fetch('http://localhost:3000/friendships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(this.state)
    }).then(() => {
      that.props.onFriendshipChange()
    })
    event.preventDefault();
    this.setState({value: ""})
  }


  render () {
    return (
      <div>
        <div>{this.state.message}</div>
        <div><button onClick={this.clickHandler.bind(this)}>Acceptttttttttttt</button></div>
      </div>
    )
  }
}

export default NewFriendship
