import React from 'react'
import HomePageModal from './HomePageModal.js'

class ShowWishlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.props.onWishlistChange()
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
      heading = <h2> Your Wishlist </h2>
    } else {
      heading = <h2> {this.props.user.username}'s Wishlist </h2>
    }
    return (
      <div id="lists">
        {heading}
      <ul>
      {this.props.wishlist.map((wish, index) => 
          { if (wish.user_id === this.props.user.id) {
            return <div class="user-tickets"> 
              <h3>{ wish.title }</h3>
              "{wish.note}"
              <br></br>
              <button className="expand-btn" type="button" id={index} onClick={this.showModal}>
                Expand
              </button>
             </div>
            } 
          }
      )}
      <HomePageModal result={this.props.wishlist[this.state.buttonId]} id={this.state.buttonId} show={this.state.show} handleClose={this.hideModal} />

      </ul>
      </div>
    )
  }
}


export default ShowWishlist