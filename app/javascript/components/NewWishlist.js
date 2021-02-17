import React from 'react'

class NewWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      user_id: this.props.user.id
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({note: event.target.value});
  }

  handleSubmit = (event) => {
    let that =  this
    fetch('http://localhost:3000/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(this.state)
    }).then(() => {
      that.props.onWishlistChange()
    })
    event.preventDefault();
    this.setState({value: ""})
  }

  render () {
    return (
      <form className='new-wishlist' onSubmit={this.handleSubmit}>
        <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='5' cols='50' placeholder="Add new wishlist item..."/>
        <br />
        <button type="submit" value="Submit" id="new-note">New Wish</button>
      </form>
    )
  }
}

export default NewWishlist
