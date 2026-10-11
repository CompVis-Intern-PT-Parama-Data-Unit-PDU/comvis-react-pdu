import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";
import cv from "@techstark/opencv-js"; 

interface VideoPlayerProps {
  src: string; // URL sumber HLS
  className?: string; // Tambahan styling opsional
  autoPlay?: boolean; // Otomatis memutar video
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streaming, setStreaming] = useState(true);

  const config = {
    capLevelToPlayerSize: true,
    ignoreDevicePixelRatio: true,
    maxDevicePixelRatio: 2,
    maxBufferLength: 5,
    backBufferLength: 15,
    liveSyncDurationCount: 2,
    initialLiveManifestSize: 2,
    maxStarvationDelay: 2,
    maxLoadingDelay: 2,
    highBufferWatchdogPeriod: 1,
    nudgeMaxRetry: 5,
    maxFragLookUpTolerence: 0.1,
    maxMaxBufferLength: 40,
    liveSyncOnStallIncrease: 0.5,
    liveMaxLatencyDurationCount: 3,
    maxLiveSyncPlaybackRate: 1.1,
  };

  useEffect(() => {
    const hls = new Hls(config);

    if (Hls.isSupported() && videoRef.current) {
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together!");
        hls.loadSource(src);
      });
      hls.on(Hls.Events.FRAG_CHANGED, () => {
        const playingDate = hls.playingDate; // UTC timestamp
        console.log("Current Playing Date:", playingDate);
      });
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.error("HLS.js encountered a fatal error:", data.details);
          hls.destroy();
        }
      });
    }

    return () => {
      hls.destroy();
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const FPS = 30;

      // Pastikan video sudah siap untuk diproses
      video.addEventListener("play", () => {
        let cap = new cv.VideoCapture(video);
        let frame = new cv.Mat(video.videoHeight, video.videoWidth, cv.CV_8UC4);
        let fgmask = new cv.Mat(video.videoHeight, video.videoWidth, cv.CV_8UC1);
        let fgbg = new cv.BackgroundSubtractorMOG2(500, 16, true);

        const processVideo = () => {
          if (!streaming) {
            // Hentikan pemrosesan video
            frame.delete(); fgmask.delete(); fgbg.delete();
            return;
          }
          let begin = Date.now();
          // Baca frame dari video
          cap.read(frame);
          // Terapkan algoritma deteksi latar belakang
          fgbg.apply(frame, fgmask);
          // Tampilkan hasil di canvas
          cv.imshow(canvas, fgmask);

          // Schedule ulang pemrosesan frame berikutnya
          let delay = 1000 / FPS - (Date.now() - begin);
          setTimeout(processVideo, delay);
        };

        // Mulai pemrosesan video
        setTimeout(processVideo, 0);
      });
    }
  }, [streaming]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ display: "none" }} // Sembunyikan video asli
      />
      <canvas ref={canvasRef} /> {/* Canvas untuk output OpenCV */}
    </div>
  );
}
