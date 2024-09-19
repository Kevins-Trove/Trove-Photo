import { useEffect, useRef } from 'react';
import VideoFile from '/videos/Splashscreen-open.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);


  return (
    
    <div className='videoBackground'>
      <video ref={videoRef} >
        <source src={VideoFile}type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
