import PropTypes from 'prop-types';

// import s from './friendListItem.module.css';
function FriendsListItem({ friend }) {
  // const offline = `${friend.isOnline ? 'offline' : ' '}`;
  return (
    <li className="item">
      <span className="status {offline}"></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendsListItem;
