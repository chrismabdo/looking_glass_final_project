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
    fetch('http://localhost:3000/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(this.state)
    })
    event.preventDefault();
    this.setState({value: ""})
  }

  render () {
    return (
      <form className='new-wishlist' onSubmit={this.handleSubmit}>
        <textarea type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add new wishlist item..."/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewWishlist