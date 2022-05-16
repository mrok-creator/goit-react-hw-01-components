import PropTypes from 'prop-types';

import FriendsListItem from './FriendListItem';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(i => (
        <FriendsListItem friend={i} />
      ))}
    </ul>
  );
}

FriendsListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
