import { useState } from "react";
import photos from "mocks/photos";

const useApplicationData = () => {

  //state to track favorited photos
 const [favoritedPhotos, setFavoritedPhotos] = useState([]);
 //state to track the modal
 const [isModalOpen, setIsModalOpen] = useState(false);
 //state to track selected photo details
 const [selectedPhoto, setSelectedPhoto] = useState(null);
 //state to track similar photos
 const [similarPhotos, setSimilarPhotos] = useState([])


 //function to toggle favorited photos
 const toggleFavorite = (photoId) => {
  setFavoritedPhotos((prevFavorites) => {
    if (prevFavorites.includes(photoId)) {
      return prevFavorites.filter(id => id !== photoId)
    }
    return [...prevFavorites, photoId];
  });
 }

 //function to toggle the modal
 const toggleModal = (photo) => {
  console.log('toggle Modal')
  if (photo && photo.similar_photos) {
    const relatedPhotos = Object.values(photo.similar_photos);
    setSimilarPhotos(relatedPhotos)
  } else {
    setSimilarPhotos([]);
  }
  setSelectedPhoto(photo);
  setIsModalOpen(prev => !prev);

 };


 //returning the state/actions
  return {
    state: {
      favoritedPhotos,
      isModalOpen,
      selectedPhoto,
      similarPhotos,
    },
    toggleFavorite,
    toggleModal,
  }
  
}


export default useApplicationData;