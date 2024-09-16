
import { useReducer, useEffect } from 'react';

// Define action types
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
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

      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        };

        case ACTIONS.SET_TOPIC_DATA:
          return {
            ...state,
            topicData: action.payload
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
    similarPhotos: [],
    photoData: [],
    topicData: []
  };

 
  //replaced all useState with useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

   //effect to make get request to /api/photos and console.log the response
   useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then((data) => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    .catch(error => {console.error('Error fetching photos:', error)})
  }, []);

    //effect to make get request to /api/topics
    useEffect(() => {
      fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then((data) => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
    }, []);


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