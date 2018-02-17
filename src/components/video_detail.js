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
        style={{    
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            width: '300px',
            height: '200px',
            top: '30%',
            left: '50%',
            margin: '-100px 0 0 -150px',
        }} 
        src= {url}> </iframe>
        </div>
    
    </div>

);  
};
export default VideoDetail;
//z-index: 15,
//<iframe style={{paddingLeft:'460px'}} src= {url}> </iframe>