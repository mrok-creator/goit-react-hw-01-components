import PropTypes from 'prop-types';

import FriendsListItem from '../FriendItem';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(i => (
        <FriendsListItem key={i.id} friend={i} />
      ))}
    </ul>
  );
}
FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
