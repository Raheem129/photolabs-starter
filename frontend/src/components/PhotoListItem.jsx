import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  id,
  location,
  imageSource,
  username,
  profile,
  user,
  urls,
  getSimilarPhotos,
  toggleFavourite,
  selected,
  onPhotoClick
}) => {

  return (
    < div className="photo-list__container">
      <div className="photo-list__item">
        <>
          <PhotoFavButton
            id={id}
            selected={selected}
            onClick={toggleFavourite}
            getSimilarPhotos={getSimilarPhotos}
          />
        </>
        <img className='photo-list__image'
          onClick={() => onPhotoClick(id)}
          src={urls.full || imageSource}
          alt={`Photo ${id}`}
        />
        <footer className="photo-list__footer">
          <img className='photo-list__user-profile'
            src={user.full || profile}
            alt={`Photo ${id}`}
          />
          <section className="photo-list__user-details">
            <p className="photo-list__user-info">
              {username.full || username}
            </p>
            <p className="photo-list__user-location ">
              {location.city}, {location.country}
            </p>
          </section>
        </footer>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;