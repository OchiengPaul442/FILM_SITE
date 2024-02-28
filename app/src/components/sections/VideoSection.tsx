import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PlayButton from '@public/icons/videoIcons/PlayButton';
import { BounceLoader } from 'react-spinners';

interface VideoSectionProps {
  src: string;
  poster: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ src, poster }) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlayButton = () => {
    setLoading(true);
    setTimeout(() => {
      setPlaying(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full relative transition-all duration-2000">
      {/* Display thumbnail and play button when video is not playing */}
      {!playing && (
        <>
          <img
            src={poster}
            alt="Thumbnail"
            className={`w-full h-full object-cover transition-opacity duration-2000 ${loading ? 'opacity-0' : 'opacity-100'}`}
          />
          <div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-2000 ${loading ? 'opacity-0' : 'opacity-100'}`}
          >
            <div onClick={handlePlayButton} className="cursor-pointer">
              <PlayButton fill="#fff" width={100} />
            </div>
          </div>
        </>
      )}

      {/* Display loading spinner while video is loading */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <BounceLoader color="#fff" />
        </div>
      )}

      {src && playing && (
        <ReactPlayer
          url={src}
          width="100%"
          height="100%"
          controls={true}
          playing={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
};

export default VideoSection;
