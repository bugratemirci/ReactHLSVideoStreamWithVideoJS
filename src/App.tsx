import React from 'react';
import 'video.js/dist/video-js.css';
import VideoJS from './VideoJs/index'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden' }}>
      <VideoJS
        link={"HLS URL"}
      />
    </div>
  );
}

export default App;
