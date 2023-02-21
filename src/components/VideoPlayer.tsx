import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  hideControls?: boolean;
  autoplay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className,
  loop = false,
  hideControls = false,
  autoplay = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  return (
    <video
      loop={loop}
      controls={!hideControls}
      className={clsx(className)}
      autoPlay={autoplay}
      muted
      ref={videoRef}
    >
      <source src={src} type='video/webm' />
    </video>
  );
};

export default VideoPlayer;
