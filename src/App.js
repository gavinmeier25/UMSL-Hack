import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyAMqWOtEahk1Ip5T7J_-45dcy-CuAZ3YE0';

class App extends Component {

constructor(props){
  super(props);
  this.state ={
    videos: [],
    selectedVideo: null
  };

  this.videoSearch('USML');
}

videoSearch(term){
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}
  render() {
    
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    
    return (
      <div className="App">
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
        videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
