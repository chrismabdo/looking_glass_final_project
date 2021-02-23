import React from 'react'

class NewFriendship extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      accept_friend: []
    }
  }

  clickHandler = (event) => {
    event.preventDefault();
    let id = 'user'
    fetch(`http://localhost:3000/accept_friend/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     }
    }).then((res) => {
      console.log('Successful friend addition', res)
    }).catch((err) => {
      console.log('Something went wrong', err)
    })
  }

  handleFriendshipChange() {
    event.preventDefault();
    let that = this
    fetch('http://localhost:3000/accept_request.json', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      that.setState({
        friendship: response
      })
    })
  }




  render () {
    return (
      <div>
        <div>{this.state.message}</div>
        <div><button onClick={this.clickHandler.bind(this)}>Accept</button></div>
      </div>
    )
  }
}

export default NewFriendship
