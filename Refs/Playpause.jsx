import React,{useState, useRef} from 'react'
import Video from "./videos/videoplayback.mp4"


function Playpause() {
    let [video, setVideo] = useState(Video)
    let [play,setPlay] = useState(false)
    let videoRef = useRef()

    let handleChange = () =>{
        if(!play) {
            setPlay(true)
            videoRef.current.play()
        } else {
            setPlay(false)
            videoRef.current.pause()
        }
    }

  return (
    <div>
        <video src={video} ref={videoRef} onClick={handleChange}></video>
    </div>
  )
}

export default Playpause
