import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './styles/HomeRoute.scss';
import './styles/TopNavigationBar.scss';


const App = () => {
  const {
    favourites,
    modalOpen,
    selectedPhoto,
    onClose,
    toggleFavourite,
    handlePhotoClick,
    getSimilarPhotos,
    photos,
    topics,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App" >
      <HomeRoute
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        photos={photos}
        topics={topics}
        onPhotoClick={handlePhotoClick}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {modalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          onClose={onClose}
          getSimilarPhotos={getSimilarPhotos}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
          photos={photos}
        />
      )}
      {modalOpen && selectedPhoto && (
        <div className='photo-details-modal__image'>
          <img src={selectedPhoto.urls.full} alt={selectedPhoto.alt_description} />
        </div>
      )}
    </div>
  );
};

export default App;