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
    return (
      <div>
      <ul>
      {this.props.recommendations.map((recommendation) =>
        <div>
          {recommendation.note}
        </div>
      )}
      </ul>
      </div>
    )
  }
}


export default ShowRecommendation
