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
      user_id: this.props.user.id,
      id: null
    };
    console.log(this.state)
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.clickHandler = this.clickHandler.bind(this);
    // this.hideModal = this.hideModal.bind(this);

  }

  showModal = (e, index) => {
    // console.log(this.props.results[0])
    // console.log(index)
    console.log()
    this.setState({ show: true, buttonId: e.target.id });

    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(this.state)
    }).then(() => {
      that.props.onRecommendationsChange()
    })
    event.preventDefault();
    this.setState({value: ""})
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
      <div>
          <h2> Your Results </h2>
      <ul>

      {this.props.results.map((result, index) =>
        <div>
          {result[0]}, {result[2]}
          <button type="button" id={index} onClick={this.showModal}>
            Expand
          </button>

        </div>
      )}
      <Modal result={this.props.results[this.state.buttonId]} id={this.state.buttonId} show={this.state.show} handleClose={this.hideModal}>
          <NewRecommendation user={this.props.user} result={this.props.results[this.state.buttonId]} onRecommendationsChange={this.props.onRecommendationsChange}/>
      </Modal>

      </ul>
      </div>
    )
  }
}


export default ShowSearchOptions
