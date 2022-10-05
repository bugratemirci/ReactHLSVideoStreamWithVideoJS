import React from 'react';
import 'video.js/dist/video-js.css';
import VideoJS from './VideoJs/index'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden' }}>
      <VideoJS
        link={"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"}
      />
    </div>
  );
}

export default App;
