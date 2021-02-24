import React from 'react'

class NewWishlistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: `Added from ${this.props.user.username}'s recommendations`
    }
  }

  handleSubmit = (event) => {
    let that =  this
      fetch('http://localhost:3000/wishlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          user_id: that.props.currentUser.id,
          note: that.state.note,
          movie_id: that.props.movie_id
        })
      })
    event.preventDefault();
    this.setState({value: ""})
  }

  render () {
    return (
      <form className='new-wishlist' onSubmit={this.handleSubmit} id="new-form">
        <button type="submit" value="Submit" id="new-note">Add To Wishlist</button>
      </form>
    )
  }
}

export default NewWishlistButton
