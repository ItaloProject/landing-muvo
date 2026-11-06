"use client";

import { useEffect, useRef } from "react";

type Props = {
  onEnded?: () => void;
};

/* fallback usado quando não existe public/hero/muvo-mascot.png */
export default function HeroVideo({ onEnded }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const holdLastFrame = () => {
      try {
        if (video.duration && Number.isFinite(video.duration)) {
          video.currentTime = Math.max(0, video.duration - 0.05);
        }
      } catch {
        /* ignore */
      }
      video.pause();
      onEnded?.();
    };

    video.addEventListener("ended", holdLastFrame);
    if (video.ended) holdLastFrame();

    return () => video.removeEventListener("ended", holdLastFrame);
  }, [onEnded]);

  return (
    <video
      ref={videoRef}
      className="hero-video absolute inset-0 h-full w-full object-cover object-[center_35%] lg:object-[78%_center]"
      src="/hero/hero.mp4"
      poster="/hero/hero-poster.jpg"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
