import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos,
  topics,
  favourites,
  toggleFavourite,
  onPhotoClick,
  fetchPhotosByTopic
}) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favourites.length}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <div className="home-route__content">
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
