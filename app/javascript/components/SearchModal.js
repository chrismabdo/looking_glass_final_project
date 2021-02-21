import React, { Component } from "react";
import Modal from './Modal.js';
import NewRecommendation from './NewRecommendation.js'
class SearchModal extends Component {
    constructor() {
      super();
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

    render() {
        return (
          <main>
            <h1>React Modal</h1>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p><NewRecommendation user={this.props.user} onRecommendationsChange={this.handleRecommendationsChange}/></p>
            </Modal>
            <button type="button" onClick={this.showModal}>
              Open
            </button>
          </main>
      );
    }
}
  
  export default SearchModal