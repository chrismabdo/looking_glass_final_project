import React from 'react'
import NewWishlistButton from './NewWishlistButton.js'
// import moment from 'moment';

class ShowRecommendation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.onRecommendationsChange()
  }

  render () {
    let heading;
    if (this.props.currentUser.id == this.props.user.id) {
      heading = <h2> Your Recommendations </h2>
    } else {
      heading = <h2> {this.props.user.username}'s Recommendations </h2>
    }
    return (
      <div id="lists">
        {heading}
      <ul>
      {this.props.recommendations.map((recommendation) =>
        { if (recommendation.user_id === this.props.user.id) {
            return <div> 
              { recommendation.title }
              { this.props.currentUser.id == this.props.user.id ? null : <NewWishlistButton key={recommendation.id} movie_id={recommendation.movie_id} user={this.props.user} currentUser={this.props.currentUser}/>}
              </div>
            } 
          }
      )}
      </ul>
      </div>
    )
  }
}


export default ShowRecommendation
