import React from 'react'

class ShowWishlist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.onWishlistChange()
  }

  render () {
    return (
      <div id="lists">
          <h2> Your Wishlist </h2>
      <ul>
      {this.props.wishlist.map((wish) => 
          { if (wish.user_id === this.props.user.id) {
            return <div> { wish.note } </div>
            } 
          }
      )}
      </ul>
      </div>
    )
  }
}


export default ShowWishlist