import React from "react"
import NewRecommendation from "./NewRecommendation.js"
import ShowRecommendation from "./ShowRecommendations.js"
import PropTypes from "prop-types"
class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleRecommendationsChange = this.handleRecommendationsChange.bind(this);
    this.state = {
      recommendations: []
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

  render () {
    return (
      <React.Fragment>
        <NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/>
        <ShowRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange} recommendations={this.state.recommendations}/>
      </React.Fragment>
    );
  }
}

export default ParentComponent
