import React from "react"
import PropTypes from "prop-types"
class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render () {
    return (
      <React.Fragment>
        Test
      </React.Fragment>
    );
  }
}

export default ParentComponent
