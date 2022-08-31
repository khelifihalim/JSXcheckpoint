import ReactPlayer from 'react-player';
//import VideoPlayer from "react-video-js-player";
import videoSrc from './video/Nuages.mp4'

const Video = () => {
    return(
        
        <ReactPlayer className="video-style" 
           url={videoSrc}
            controls={true}
            playing={true}
        />
    )
}

export default Video;