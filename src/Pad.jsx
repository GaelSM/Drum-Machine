import { useEffect } from 'react'

export default function Pad({keyboard, audio, setKey}){
  useEffect(() => {
    document.addEventListener("keyup", (e) => handleClick(e.key.toUpperCase()))
  }, [])

  const handleClick = (key) => {
    if(document.querySelector(`#${key}`) == null) return
    document.querySelector(`#${key}`).play()
    setKey(key)
  }

  return (
    <div className="drum-pad" id={`drum-${keyboard}`} onClick={() => handleClick(keyboard)}>
      <h2> {keyboard} </h2>
      <audio src={audio} className="clip" id={keyboard}></audio>
    </div>
  )
}