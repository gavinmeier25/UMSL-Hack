import React from 'react'
const VideoDetail = ({video}) => {
    if(!video) {
        return <div> Loading . . . </div>;
    }
const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;

return (
    <div className= "video-detail">
        <div>
        <iframe 
       
         src= {url}> </iframe>
        </div>
    
    </div>

);  
};
export default VideoDetail;
//z-index: 15,
//<iframe style={{paddingLeft:'460px'}} src= {url}> </iframe>