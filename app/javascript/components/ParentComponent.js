import React from "react"
import NewRecommendation from "./NewRecommendation.js"
import NewWishlist from "./NewWishlist.js"
import ShowRecommendation from "./ShowRecommendations.js"
import ShowWishlist from "./ShowWishlist.js"
// import ShowFriendship from "./ShowFriendship.js"
// import NewFriendship from "./NewFriendship.js"
import PropTypes from "prop-types"
class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleRecommendationsChange = this.handleRecommendationsChange.bind(this);
    this.handleWishlistChange = this.handleWishlistChange.bind(this);
    // this.handleFriendshipChange = this.handleFriendshipChange.bind(this);
    this.state = {
      recommendations: [],
      wishlist: [],
      // friendship: []
    }
  }

  handleRecommendationsChange() {
    let that = this
    fetch('http://localhost:3000/recommendations.json', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      that.setState({
        recommendations: response
      })
    })
  }

  handleWishlistChange() {
    let that = this
    fetch('http://localhost:3000/wishlists.json', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      that.setState({
        wishlist: response
      })
    })
  }





  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        {/* <NewFriendship user={this.props.user} onFriendshipChange={this.handleFriendshipChange}/> */}
        <NewWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange}/>
        <NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/>
        <ShowWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange} wishlist={this.state.wishlist}/>
        {/* <ShowFriendship user={this.props.user} onFriendshipChange={this.handleFriendshipChange} friendship={this.state.friendship}/> */}
        <ShowRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange} recommendations={this.state.recommendations}/>
      </React.Fragment>
    );
  }
}

export default ParentComponent
