import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';


export const PhotoDetailsModal = (props) => {

  return (

    <div className='photo-details-modal'>
      <div className="photo-details-modal__header">
        <button className='photo-details-modal__close-button'
          onClick={props.onClose}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_428_287)">
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className='photo-details-modal__content'>
        <div className="photo-details-modal__image-wrap">
          {props.selectedPhoto && (
            <PhotoFavButton
              onClick={() => props.toggleFavourite(props.selectedPhoto.id)}
              selected={props.favourites.includes(props.selectedPhoto.id)}
              className="photo-details-modal__fav-button"
            />
          )}

          {props.selectedPhoto && (
            <img className='photo-details-modal__image'
              src={props.selectedPhoto.urls.regular}
            />
          )}
        </div>

        <div className='photo-details-modal__photographer-details'>
          <img
            src={props.selectedPhoto.user.profile} className='photo-details-modal__user-profile'
          />

          <section className='photo-details-modal__photographer-info'>
            <p className="photo-details-modal__user-info">
              {props.selectedPhoto.user.username}
            </p>
            <p className="photo-details-modal__user-location">
              {props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}
            </p>
          </section>
        </div>
        <section className="photo-details-modal__similar-photos">
          <p className="photo-details-modal__similar-photos-header">
            Similar Photos
          </p>
          <PhotoList
            photos={props.getSimilarPhotos()}
            favourites={props.favourites}
            toggleFavourite={props.toggleFavourite}
          />
        </section>
      </div>
    </div>
  );
};


export default PhotoDetailsModal;;;;