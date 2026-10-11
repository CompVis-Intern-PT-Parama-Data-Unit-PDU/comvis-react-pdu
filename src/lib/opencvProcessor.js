import cv from "@techstark/opencv-js"; // Pastikan OpenCV.js sudah terinstal

export function processFrame(videoElement, canvasElement) {
  const FPS = 30;
  let cap = new cv.VideoCapture(videoElement);
  let frame = new cv.Mat(videoElement.videoHeight, videoElement.videoWidth, cv.CV_8UC4);
  let fgmask = new cv.Mat(videoElement.videoHeight, videoElement.videoWidth, cv.CV_8UC1);
  let fgbg = new cv.BackgroundSubtractorMOG2(500, 16, true);

  function processVideo() {
    let begin = Date.now();
    
    cap.read(frame);
    fgbg.apply(frame, fgmask);    
    cv.imshow(canvasElement, fgmask);

    let delay = 1000 / FPS - (Date.now() - begin);
    setTimeout(processVideo, delay);
  }

  setTimeout(processVideo, 0);

  return () => {
    // Cleanup OpenCV resources
    frame.delete();
    fgmask.delete();
    fgbg.delete();
  };
}
