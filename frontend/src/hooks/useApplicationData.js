
import { useReducer } from 'react';

// Define action types
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
};

// Reducer function to handle different actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload.id]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload.id)
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.similarPhotos
      };

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}




const useApplicationData = () => {

  //object to hold the initial values of state variables
  const initialState = {
    favoritedPhotos: [],
    isModalOpen: false,
    selectedPhoto: null,
    similarPhotos: []
  };

  //replaced all useState with useReducer
  const [state, dispatch] = useReducer(reducer, initialState)


 //function to toggle favorited photos (updated for reducer)
 const toggleFavorite = (photoId) => {
  if (state.favoritedPhotos.includes(photoId)) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
  } else {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
  }

 }

 //function to toggle the modal (updated for reducer)
 const toggleModal = (photo) => {
  if (photo && photo.similar_photos) {
    const relatedPhotos = Object.values(photo.similar_photos);
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo, similarPhotos: relatedPhotos } });
  } else {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo, similarPhotos: [] } });
  }

  dispatch({ type: ACTIONS.TOGGLE_MODAL });
 };


 //returning the state/actions
  return {
    state,
    toggleFavorite,
    toggleModal
  };
  
}


export default useApplicationData;