import React from 'react'

class NewRecommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      user_id: this.props.user.id
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({note: event.target.value});
  }

  handleSubmit = (event) => {
    let that =  this
    fetch('http://localhost:3000/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(this.state)
    }).then(() => {
      that.props.onRecommendationsChange()
    })
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
