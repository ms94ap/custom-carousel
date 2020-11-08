import React from 'react'

import Carousel from './components/Carousel';
import blocks from './icons.json'

function App() {
  const fetchedImages = blocks.map(block => (block.images[Math.floor(Math.random() * block.images.length)]))


  return (
    <div className="App">
      <Carousel images={fetchedImages}/>
    </div>
  );
}

export default App;
