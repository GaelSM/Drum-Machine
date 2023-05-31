import { useState } from 'react'
import './App.css'
import Pad from './Pad'
import pads from './pads.json'

function App() {
  const [key, setKey] = useState('DRUM MACHINE')

  return (
    <div id="drum-machine">
      <div id="display">
        <h1> {key} </h1>
        <div className="pads-container">
          {
            pads.map(({keyboard, audio}) => {
              return <Pad key={`drum-${keyboard}`} keyboard={keyboard} audio={audio} setKey={setKey}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
