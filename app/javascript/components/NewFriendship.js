import React from 'react'

class NewFriendship extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'hi'
    }
  }

  const clickHandler = (event) => {
    event.preventDefault();
    // let id = ??? what is the friend id
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
