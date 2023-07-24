import { useReducer, useEffect } from 'react';

const initialState = {
  favourites: [],
  modalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (state.favourites.includes(action.id)) {
        const newState = {
          ...state,
          favourites: state.favourites.filter((fav) => fav !== action.id)
        };
        return newState;

      } else {
        const newState = {
          ...state,
          favourites: [...state.favourites, action.id]
        };
        return newState;
      }

    case 'SELECT_PHOTO':
      const selectedPhoto = state.photos.find((photo) => photo.id === action.id);
      return {
        ...state,
        selectedPhoto,
        modalOpen: true
      };

    case 'CLOSE_MODAL':

      return {
        ...state,
        modalOpen: false
      };

    case 'SET_PHOTOS':

      return {
        ...state,
        photos: action.payload,
      };

    case 'SET_TOPICS':

      return {
        ...state,
        topics: action.payload,
      };

    case 'SET_PHOTOS_BY_TOPIC':

      return {
        ...state,
        photos: action.payload,
      };


    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id });
  };

  const handlePhotoClick = (id) => {
    dispatch({ type: 'SELECT_PHOTO', id });
  };

  const onClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const getSimilarPhotos = () => {
    if (state.selectedPhoto) {
      const similarPhotos = state.photos.filter(
        (photo) =>
          photo.topic === state.selectedPhoto.topic && photo.id !== state.selectedPhoto.id
      );
      return similarPhotos;
    }
    return [];
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_PHOTOS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });

    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_TOPICS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });

  }, []);

  return {
    favourites: state.favourites,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    toggleFavourite,
    handlePhotoClick,
    onClose,
    getSimilarPhotos,
    photos: state.photos,
    topics: state.topics,
    fetchPhotosByTopic,
  };
};


export default useApplicationData;