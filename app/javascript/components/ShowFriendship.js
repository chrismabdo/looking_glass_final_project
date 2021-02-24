import React from 'react'
// import moment from 'moment';

class ShowFriendship extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.onFriendshipsChange()
  }

  render () {
    return (
      <div>
        <h2> Your Friendships </h2>
      <ul>
      {this.props.friendships.map((friendship) =>
        <div class="your-friends">
          {friendships.friend_id}
        </div>
      )}
      </ul>
      </div>
    )
  }
}


export default ShowFriendship
