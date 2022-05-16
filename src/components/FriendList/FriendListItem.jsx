import PropTypes from 'prop-types';

function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status {isOnline}"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsListItem;
