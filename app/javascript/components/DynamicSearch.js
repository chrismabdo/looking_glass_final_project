import React from 'react'
import TextField from '@material-ui/core/TextField'; 
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import Button from '@material-ui/core/Button';

// call API on submit only
// change API to use OMDB
// pass contents of search box to API call
  
class DynamicSearch extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      myOptions: [],
      search: ""
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({search: event.target.value});
  }
  
  getDataFromAPI = (event) => { 
    console.log("Options Fetched from API") 
  
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cefce1b3b47a75252c7fa3fc7699a6a8&query=${this.state.search.split(' ').join('+')}`).then((response) => { 
      console.log(response)
      return response.json() 
    }).then((response) => { 
      console.log(response.results) 
      var myOptionsArray = []
      for (var i = 0; i < response.results.length; i++) { 
        myOptionsArray.push(response.results[i].title) 
      } 
      this.setState({myOptions: myOptionsArray})
    }) 
    event.preventDefault();
  } 
  
  render() {
    return ( 
    <form className='new-wishlist' onSubmit={this.getDataFromAPI}>
      <textarea type="text" value={this.state.value} onChange={this.handleChange} rows='5' cols='50' placeholder="Search for a film"/>
      <br />
      <button type="submit" value="Submit" id="new-note">Search</button>
    </form>
    ); 
  }
} 
  
export default DynamicSearch