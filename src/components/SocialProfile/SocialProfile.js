import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './image.jpg'

import styles from './SocialProfile.module.css'

const Profile = ({ avatar, name, tag, location, stats}) => (
    <div className={styles.Profile}>
      <div>
        <img
          src={avatar}
          alt={name}
          width="240"
        />
        <p className={styles.UserInfo} >{ name }</p>
        <p className={styles.UserInfo}>{  tag }</p>
        <p className={styles.UserInfo}>{ location }</p>
      </div>

      <ul className={styles.UserInfoList}>
        <li className={styles.UserInfoText}>
          <span className={styles.UserInfoTitle}>Followers</span>
          <span >{stats.followers}</span>
        </li>
        <li className={styles.UserInfoText}>
          <span className={styles.UserInfoTitle}>Views</span>
          <span >{ stats.views }</span>
        </li>
        <li className={styles.UserInfoText}>
          <span className={styles.UserInfoTitle}>Likes</span>
          <span >{ stats.likes }</span>
        </li>
      </ul>
    </div>
)
Profile.defaultProps = {
  avatar: defaultImage,
}
Profile.propTypes = {
  avatar: PropTypes.string,
  alt: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
}
export default Profile;