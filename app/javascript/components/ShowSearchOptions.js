import React from 'react'

class ShowSearchOptions extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }


  render () {
    return (
      <div>
          <h2> Your Results </h2>
      <ul>
      {this.props.results.map((result) =>
        <div>
          {result}
        </div>
      )}
      </ul>
      </div>
    )
  }
}


export default ShowSearchOptions