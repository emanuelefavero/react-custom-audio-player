import './App.css'
import AudioPlayer from './components/audio-player/AudioPlayer'
import beat from '/scary-trap-01-beat.mp3'

function App() {
  return (
    <>
      <AudioPlayer song={beat} />
    </>
  )
}

export default App
