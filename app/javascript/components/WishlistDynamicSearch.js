import React from 'react'
import ShowSearchOptions from './ShowSearchOptions.js'
  
class WishlistDynamicSearch extends React.Component { 
  
  constructor(props) {
    super(props);
    console.log("In dynamic search")
    console.log(this.props)
    console.log("above should be userinfo")
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
    console.log("Options Fetched from API") 
  
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cefce1b3b47a75252c7fa3fc7699a6a8&query=${this.state.search.split(' ').join('+')}`).then((response) => { 
      return response.json() 
    }).then((response) => { 
      var myOptionsArray = []
      for (var i = 0; i < response.results.length; i++) { 
        myOptionsArray.push([]) 
        myOptionsArray[i].push(response.results[i].title)
        myOptionsArray[i].push(response.results[i].id)
        myOptionsArray[i].push(response.results[i].release_date)
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
        <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='5' cols='50' placeholder="Search for a film"/>
        <br />
        <button type="submit" value="Submit" id="new-note">Search</button>
      </form>
      <div>
        {console.log(this.state.myOptions)}
        {shouldShowResults ? (<ShowSearchOptions user={this.props.user} results={this.state.myOptions} onWishlistChange={this.props.onWishlistChange} parentChecker={'wishlist'}/>) : (console.log('hello')) }
      </div>
    </div>
    ); 
  }
} 
  
export default WishlistDynamicSearch