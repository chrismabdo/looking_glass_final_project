import React from 'react'
import TextField from '@material-ui/core/TextField'; 
import Autocomplete from '@material-ui/lab/Autocomplete'; 

// call API on submit only
// change to use React Classes (consistency with other components)
  
class DynamicSearch extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      myOptions: []
    }
  }
  
  getDataFromAPI = () => { 
    console.log("Options Fetched from API") 
  
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => { 
      return response.json() 
    }).then((res) => { 
      console.log(res.data) 
      var myOptionsArray = []
      for (var i = 0; i < res.data.length; i++) { 
        myOptionsArray.push(res.data[i].employee_name) 
      } 
      this.setState({myOptions: myOptionsArray})
    }) 
  } 
  
  render() {
    return ( 
      <div style={{ marginLeft: '40%', marginTop: '60px' }}> 
        <h3>Greetings from GeeksforGeeks!</h3> 
        <Autocomplete 
          style={{ width: 500 }} 
          freeSolo 
          autoComplete 
          autoHighlight 
          options={this.state.myOptions} 
          renderInput={(params) => ( 
            <TextField {...params} 
              onChange={this.getDataFromAPI} 
              variant="outlined"
              label="Search Box"
            /> 
          )} 
        /> 
      </div> 
    ); 
  }
} 
  
export default DynamicSearch