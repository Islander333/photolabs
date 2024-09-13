import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';




// Note: Rendering a single component to build components in isolation
const App = () => {

  //const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">

      <TopicList />

      <PhotoList />

    </div>
  );
};

export default App;
