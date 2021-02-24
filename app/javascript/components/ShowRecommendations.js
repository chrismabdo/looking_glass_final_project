import React from 'react'
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
            return <div> { recommendation.note } </div>
            } 
          }
      )}
      </ul>
      </div>
    )
  }
}


export default ShowRecommendation
