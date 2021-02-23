import React from 'react'

class NewRecommendation extends React.Component {
  constructor(props) {
    super(props);
    console.log("In new RECOMMENDATIONs")
    console.log(this.props)
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
    console.log(this.props.result[1])
    this.setState({api_id: this.props.result[1]}, () => {
      console.log('CALLBACK')
      console.log(this.state)
      console.log('CALLBACK')
      fetch('http://localhost:3000/movies/add_recommendation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie: {
          api_id: that.state.api_id,
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

  
    // fetch('http://localhost:3000/movies', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //  },
    //   body: JSON.stringify(this.state)
    // }).then(() => {
    //   that.props.onRecommendationsChange()
    // })
    event.preventDefault();
    this.setState({value: ""})
  }

  render () {
    return (
      <form className='new-recommendation' onSubmit={this.handleSubmit}>
        <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='5' cols='50' placeholder="Give mans a recommendation my G..."/>
        <br />
        <button type="submit" value="Submit" id="new-note">New Recommendation</button>
      </form>
    )
  }
}

export default NewRecommendation
