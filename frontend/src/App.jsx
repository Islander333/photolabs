import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';




// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">

      { /* {photos.map((photo, index) => (
            <PhotoListItem key={index} photo={photo}/>
      ))} */ }

      <PhotoList />

    </div>
  );
};

export default App;
