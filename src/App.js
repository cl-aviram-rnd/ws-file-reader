import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import './App.css';

class App extends Component {
  state = {};

  onError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div className="container">
        <div className="links">
          Add links for the app capabilities (pdf, excel, video and others)
          {/* each link would change the app state and display something else inside the content */}
        </div>
        <div className="content">
          {/* should read state. my suggestion is to add a component that will wrap the react-file-reader and would display different files based on props */}
          <div>
            {/*
            live video using html5 only
            data-dashjs-player tells the dash component that it will use mpeg-dash format for live streaming (the component does the rest)
            jsx attributes are camelCase so 'autoplay' becomse 'autoPlay'
            */}
            <video
              data-dashjs-player

              autoPlay
              src="https://vm2.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd"
              controls>
              Not supported!
            </video>
          </div>
          <div>
            {/* example static video (url or local file) use whatever comes on your mind */}
            <FileViewer
              fileType={'mp4'}
              filePath={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
              onError={this.onError}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
