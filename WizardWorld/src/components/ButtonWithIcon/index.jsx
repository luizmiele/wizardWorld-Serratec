import React from 'react';
import styles from './styles.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ButtonWithIcon({onClick}) {
  return (
    <button onClick={() => onClick} className={styles.customButton}>
      <FavoriteIcon className={styles.customIcon} />
      Favorite
    </button>
  );
}

export default ButtonWithIcon;