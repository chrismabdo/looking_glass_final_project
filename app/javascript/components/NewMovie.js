handleSubmit = (event) => {
    let that =  this
    fetch('http://localhost:3000/movies', {
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
