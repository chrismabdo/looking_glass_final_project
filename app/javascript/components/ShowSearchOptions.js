import React from 'react'
import Modal from './Modal.js';
import NewRecommendation from './NewRecommendation.js'
import NewWishlist from './NewWishlist.js'

class ShowSearchOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      user_id: this.props.user.id,
      id: null,
      titles: []
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.clickHandler = this.clickHandler.bind(this);
    // this.hideModal = this.hideModal.bind(this);

  }

  showModal = (e, index) => {
    this.setState({ show: true, buttonId: e.target.id });
  };

  // showModal = (e, index) => {
  //   this.setState({ showModal: true, modalId: index });
  //   console.log("Index: " + index);
  // };

  hideModal = () => {
    this.setState({ show: false });
  };

  // hideModal = (e, index) => {
  //   this.setState({ showModal: false, modalId: index });
  //   console.log("Index: " + index);
  // };

//   clickHandler(e, index) {
//     this.setState({ activeModal: index })
// }

//   hideModal() {
//     this.setState({ activeModal: null })
// }

  render () {
    return (
      <div class="search-results-list">
          <h2> Your Results </h2>
      <ul>
      {this.props.results.map((result, index) =>
        <div class="each-result">
          {result[0]}, {result[2]}
          
          <button className="expand-btn" type="button" id={index} onClick={this.showModal}>
            Expand
          </button>
          
          
        </div>
      )}
      <Modal result={this.props.results[this.state.buttonId]} id={this.state.buttonId} show={this.state.show} handleClose={this.hideModal}>

        {this.props.parentChecker == 'recommendation' ? (<NewRecommendation user={this.props.user} result={this.props.results[this.state.buttonId]} onRecommendationsChange={this.props.onRecommendationsChange}/>) : <NewWishlist user={this.props.user} result={this.props.results[this.state.buttonId]} onWishlistChange={this.props.onWishlistChange} /> }
      </Modal>

      </ul>
      </div>
    )
  }
}


export default ShowSearchOptions
