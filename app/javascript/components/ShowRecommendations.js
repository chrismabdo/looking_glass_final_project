import React from 'react'
import NewWishlistButton from './NewWishlistButton.js'
import HomePageModal from './HomePageModal.js'
class ShowRecommendation extends React.Component {
  constructor(props) {
    super(props)
    console.log('SHOWREC PROPS')
    console.log(this.props)
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.props.onRecommendationsChange()
  }

  showModal = (e, index) => {
    this.setState({ show: true, buttonId: e.target.id });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render () {
    let heading;
    if (this.props.currentUser.id == this.props.user.id) {
      heading = <h2> Your Recommendations </h2>
    } else {
      heading = <h2> {this.props.user.username}'s Recommendations </h2>
    }
    return (
      <div id="lists">
        {heading}
      <ul>
      {this.props.recommendations.map((recommendation, index) =>
        { if (recommendation.user_id === this.props.user.id) {
            return <div className="user-tickets"> 
              <h3>{ recommendation.title } </h3>
              "{ recommendation.note }"
              <button type="button" id={index} onClick={this.showModal}>
                Expand
              </button>
              { this.props.currentUser.id == this.props.user.id ? null : <NewWishlistButton key={recommendation.id} movie_id={recommendation.movie_id} user={this.props.user} currentUser={this.props.currentUser}/>}
              </div>
            } 
          }
      )}
      <HomePageModal result={this.props.recommendations[this.state.buttonId]} id={this.state.buttonId} show={this.state.show} handleClose={this.hideModal} />
      </ul>
      </div>
    )
  }
}


export default ShowRecommendation
