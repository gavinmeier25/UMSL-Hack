import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



const API_KEY_YT = 'AIzaSyDsKPmKpKAxONN9CnEDtldAKIeUfXXW9-o';




class App extends Component {

constructor(props){
  super(props);
  this.state= {
    videos: [],
    selectedVideo: ''
  };

  this.videoSearch('umsl');
}

  videoSearch(term){

    YTSearch({key: API_KEY_YT, term: term},(videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); 
    });
  }



  render(){

  const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

  return(
    <div> 
      <div className="col-md-12">
      <div className="container-fluid">
      <VideoDetail         style={{    
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            width: '300px',
            height: '200px',
            top: '30%',
            left: '50%',
            margin: '-100px 0 0 -150px',
        }}  video={this.state.selectedVideo} />
      <SearchBar onSearchTermChange ={videoSearch} />
      </div>
      </div>
      <div>
        <p>Some Text or Something</p>
      </div>
    </div>
  );
}
}


/* <VideoList
 onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
 videos = {this.state.videos} /> */


ReactDOM.render(<App />, document.querySelector('.container') );
