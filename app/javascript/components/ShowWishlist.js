import React from 'react'

class ShowWishlist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.onWishlistChange()
  }

  render () {
    let heading;
    if (this.props.currentUser.id == this.props.user.id) {
      heading = <h2> Your Wishlist </h2>
    } else {
      heading = <h2> {this.props.user.username}'s Wishlist </h2>
    }
    return (
      <div id="lists">
        {heading}
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