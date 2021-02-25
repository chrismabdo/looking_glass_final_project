import React from 'react'

class NewRecommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_id: 0,
      note: '',
      user_id: this.props.user.id
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({note: event.target.value});
  }

  handleSubmit = (event) => {
    let that = this
    this.setState({
      title: this.props.result[0],
      api_id: this.props.result[1],
      release_date: this.props.result[2],
      overview: this.props.result[3],
      poster_path: this.props.result[4]
    }, () => {
      fetch('http://localhost:3000/movies/add_recommendation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie: {
          title: that.state.title,
          api_id: that.state.api_id,
          release_date: that.state.release_date,
          overview: that.state.overview,
          poster_path: that.state.poster_path,
          recommendations_attributes: [{
            note: that.state.note,
            user_id: that.state.user_id
          }]
        },
      })
      }).then(() => {
      that.props.onRecommendationsChange()
     })
    })
    event.preventDefault();
    this.setState({value: ""})
  }

  render () {
    return (
      
      <form className='new-recommendation' onSubmit={this.handleSubmit} id="new-form">
        <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='2' cols='50' placeholder="Let your friends know what you thought of it..."/>
        <br />
        <button type="submit" value="Submit" id="new-note">New Recommendation</button>
      </form>
    )
  }
}

export default NewRecommendation
