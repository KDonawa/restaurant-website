import { videos } from "@/assets";
import { useRef, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section>
      <div className="relative">
        <video
          src={videos.meal}
          ref={videoRef}
          loop
          muted
          className="h-[400px] w-full object-cover sm:h-[500px]"
        />

        {/* Video Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          {/* Play/Pause Button */}
          <button
            className="rounded-full border border-primary p-3 text-primary hover:border-primary-light hover:text-primary-light"
            onClick={toggleIsPlaying}
          >
            {isPlaying ? (
              <BsFillPauseFill className="h-8 w-8 " />
            ) : (
              <BsFillPlayFill className="h-8 w-8 translate-x-0.5 " />
            )}
          </button>
        </div>
      </div>
    </section>
  );

  function toggleIsPlaying() {
    setIsPlaying((value) => !value);

    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
  }
}

export default Video;
