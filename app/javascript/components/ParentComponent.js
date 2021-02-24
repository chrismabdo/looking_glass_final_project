import React from "react"
import ShowRecommendation from "./ShowRecommendations.js"
import ShowWishlist from "./ShowWishlist.js"
import RecommendationDynamicSearch from './RecommendationDynamicSearch.js'
import WishlistDynamicSearch from './WishlistDynamicSearch.js'

class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleRecommendationsChange = this.handleRecommendationsChange.bind(this);
    this.handleWishlistChange = this.handleWishlistChange.bind(this);
    this.state = {
      recommendations: [],
      wishlist: []
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
        <div>
        <ShowRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange} recommendations={this.state.recommendations}/>
        <ShowWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange} wishlist={this.state.wishlist}/>
        </div>
      </React.Fragment>
    );
  }
}

export default ParentComponent

