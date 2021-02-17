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
      <div>
          <h2> Your Wishlist </h2>
      <ul>
      {this.props.wishlist.map((wish) =>
        <div>
          {wish.note}
        </div>
      )}
      </ul>
      </div>
    )
  }
}


export default ShowWishlist