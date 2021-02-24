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
    console.log(this.props)
    return (
      <div id="lists">
        <h2> Your Recommendations </h2>
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
