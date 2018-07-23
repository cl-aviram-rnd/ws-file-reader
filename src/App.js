import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import './App.css';

import sampleHouse from './example_files/SampleHouse.wexbim';
import solarImage from './example_files/02-USVI-Solar.jpg';
import docx from './example_files/SampleSpec.docx';
import doc from './example_files/sample.doc';
import csv from './example_files/Total_Crime.csv';
import mp4 from './example_files/small.mp4';
import xlsx from './example_files/SimpleSpreadsheet.xlsx';
import photo360 from './example_files/360photo.jpg';
import avi from './example_files/drop.avi';
import webm from './example_files/small.webm';
import mov from './example_files/step.mov';
import mp3 from './example_files/sample.mp3';
import rtf from './example_files/sample.rtf';
import pdf from './example_files/sample.pdf';

class App extends Component {
  types = [
    { name: "pdf", value: pdf },
    { name: "docx", value: docx },
    { name: "mp4", value: mp4 },
    { name: "mp3", value: mp3 },
    { name: "webm", value: webm },
    { name: "wexbim", value: sampleHouse }
  ];

  constructor() {
    super();
    this.state = {
      path: this.types[0].value,
      type: this.types[0].name
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createSelectItems() {
    let items = [];

    for (let i = 0; i < this.types.length; i++) {
      items.push(<option name={this.types[i].name} value={this.types[i].value}>{this.types[i].name}</option>);
    }

    return items;
  }

  onError = (err) => {
    console.log(err);
  };


  handleChange(e) {
    let current = this.types[e.target.selectedIndex];
    this.setState({ path: current.value, type: current.name });
  }

  render() {
    return (
      <div className="container">
        <div className="links">
          {/* each link would change the app state and display something else inside the content */
            <div>
              <select value={this.state.gender} onChange={this.handleChange}>
                {/* <option name="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"> mp4</option>
                <option name="http://www.africau.edu/images/default/sample.pdf">pdf</option> */


                  this.createSelectItems()}

              </select>
            </div>
          }
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
              src="https://vm2.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd"
              controls>
              Not supported!
            </video>
          </div>
          <div>
            {/* example static video (url or local file) use whatever comes on your mind */}
            <FileViewer
              fileType={this.state.type}
              filePath={this.state.path}
              onError={this.onError} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
