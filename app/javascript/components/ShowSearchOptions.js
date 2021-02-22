import React from 'react'
import Modal from './Modal.js';
import NewRecommendation from './NewRecommendation.js'
import ParentComponent from './ParentComponent.js'
class ShowSearchOptions extends React.Component {
  constructor(props) {
    super(props)
   
    console.log("BELOW HERE, IN SHOWSEARCH OPTIONS")
    console.log(this.props)
    console.log("ABOVE HERE")
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render () {
    return (
      <div>
          <h2> Your Results </h2>
      <ul>
      {this.props.results.map((result) =>
        <div>
          {result}
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>{result}</p>
              </Modal>
              
              <button type="button" onClick={this.showModal}>
                Expand
              </button>
        </div>
      )}
      </ul>
      </div>
    )
  }
}


export default ShowSearchOptions