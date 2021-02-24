import React from "react"
import NewRecommendation from "./NewRecommendation.js"
import NewWishlist from "./NewWishlist.js"
import ShowRecommendation from "./ShowRecommendations.js"
import ShowWishlist from "./ShowWishlist.js"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';


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
        <NewWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange}/>
        <NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/>
        <ShowWishlist user={this.props.user} onWishlistChange={this.handleWishlistChange} wishlist={this.state.wishlist}/>
        <ShowRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange} recommendations={this.state.recommendations}/>
      </React.Fragment>
    );
  }
}

export default ParentComponent

