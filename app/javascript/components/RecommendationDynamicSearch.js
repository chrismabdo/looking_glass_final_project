import React from 'react'
import ShowSearchOptions from './ShowSearchOptions.js'
  
class RecommendationDynamicSearch extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      myOptions: [],
      search: "",
      showResults: false,
      user_id: this.props.user.id
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({search: event.target.value});
  }
  
  getDataFromAPI = (event) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cefce1b3b47a75252c7fa3fc7699a6a8&query=${this.state.search.split(' ').join('+')}`).then((response) => { 
      return response.json() 
    }).then((response) => { 
      var myOptionsArray = []
      for (var i = 0; i < response.results.length; i++) { 
        myOptionsArray.push([]) 
        myOptionsArray[i].push(response.results[i].title)
        myOptionsArray[i].push(response.results[i].id)
        myOptionsArray[i].push(response.results[i].release_date)
        myOptionsArray[i].push(response.results[i].overview)
        myOptionsArray[i].push(response.results[i].poster_path)
      } 
      this.setState({myOptions: myOptionsArray})
    }).then(() => {
      this.setState({showResults: true})
    })
    event.preventDefault();
  } 

  render() {
    const shouldShowResults = this.state.showResults
    return ( 
    <div>
      <form className='new-search' onSubmit={this.getDataFromAPI}>
        <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='1' cols='30' placeholder="Search for a film"/>
        <br />
        <button type="submit" value="Submit" id="new-note">Search</button>
      </form>
      <div>
        {shouldShowResults ? (<ShowSearchOptions user={this.props.user} results={this.state.myOptions} onRecommendationsChange={this.props.onRecommendationsChange} parentChecker={'recommendation'}/>) : (console.log('hello')) }
      </div>
    </div>
    ); 
  }
} 
  
export default RecommendationDynamicSearch