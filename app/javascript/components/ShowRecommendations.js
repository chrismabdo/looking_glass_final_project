import React from 'react'
// import moment from 'moment';

class ShowRecommendation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendations: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/recommendations.json', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response)
      this.setState({
        recommendations: response
      })
    })
  }

  render () {
    return (
      <div>
      <ul>
      {this.state.recommendations.map((recommendation) =>
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
