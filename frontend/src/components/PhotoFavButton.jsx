import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onClick, selected }) {

  return (
    <div className="photo-list__fav-icon"
      onClick={onClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          className="photo-list__fav-icon-svg"
          fill={selected ? '#C80000' : '#EEEEEE'}
          stroke={selected ? '#FFFFFF' : '#C80000'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;