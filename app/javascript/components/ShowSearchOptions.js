import React from 'react'
import SearchModal from './SearchModal.js'
import Modal from './Modal.js';
import NewRecommendation from './NewRecommendation.js'

class ShowSearchOptions extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
    show: false
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
              <p><NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/></p>
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