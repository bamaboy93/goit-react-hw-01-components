import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from "./FriendListItem.module.css"


const FriendList = ({ friends }) =>
  <ul className={styles.FriendList}>
    {friends.map(friend => 
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
      )}
  </ul>


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  )
};


export default FriendList;