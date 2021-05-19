import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 328,
  height: 390,
  facingMode: 'user'
};

export const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <Webcam
      audio={false}
      height={390}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      width={328}
      videoConstraints={videoConstraints}
    />
  );
};
