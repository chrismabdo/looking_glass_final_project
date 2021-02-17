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