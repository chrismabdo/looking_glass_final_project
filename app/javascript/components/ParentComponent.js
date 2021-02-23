import React from "react"
import NewRecommendation from "./NewRecommendation.js"
import NewWishlist from "./NewWishlist.js"
import ShowRecommendation from "./ShowRecommendations.js"
import ShowWishlist from "./ShowWishlist.js"
import DynamicSearch from './DynamicSearch.js'
import PropTypes from "prop-types"
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
    return (
      <React.Fragment>
        <DynamicSearch user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/>
        <NewWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange}/>
        {/* <NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/> */}
        <ShowRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange} recommendations={this.state.recommendations}/>
        <ShowWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange} wishlist={this.state.wishlist}/>
      </React.Fragment>
    );
  }
}

export default ParentComponent
