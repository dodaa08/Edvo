import vid from "./imgs/vid.mp4";


export default function VideoSection() {
    return (
      <div className='flex justify-center'>
        <video src={vid} autoPlay muted loop className='rounded-xl h-125'></video>
      </div>
    );
  }