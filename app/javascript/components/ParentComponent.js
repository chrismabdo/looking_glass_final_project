import React from "react"
import NewRecommendation from "./NewRecommendation.js"
import PropTypes from "prop-types"
class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render () {
    return (
      <React.Fragment>
        <NewRecommendation user={this.props.user}/>
      </React.Fragment>
    );
  }
}

export default ParentComponent
