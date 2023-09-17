import { useState, useEffect, useRef } from 'react'
import useComponentDidMount from './customHooks/useComponentDidMount'
import './AudioPlayer.css'
import Slider from './slider/Slider'
import ControlPanel from './controls/ControlPanel'
import Timer from './timer/Timer'

function AudioPlayer({ song }) {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const isComponentMounted = useComponentDidMount()

    const audioRef = useRef()

    useEffect(() => {
        if (isComponentMounted) {
            // Do something
            const audio = audioRef.current
            audio.pause()
            setIsPlaying(true)
            audio.play()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [song])

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        // audio.volume = 0.1

        if (!isPlaying) {
            setIsPlaying(true)
            audio.play()
        }

        if (isPlaying) {
            setIsPlaying(false)
            audio.pause()
        }
    }

    const getCurrDuration = (e) => {
        const percent = (
            (e.currentTarget.currentTime / e.currentTarget.duration) *
            100
        ).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    return (
        <div className='audio-player-container'>
            <div className='control-panel-container'>
                <ControlPanel
                    play={play}
                    isPlaying={isPlaying}
                    duration={duration}
                    currentTime={currentTime}
                />
            </div>

            <Slider percentage={percentage} onChange={onChange} />
            <Timer duration={duration} currentTime={currentTime} />
            <audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={song}
            ></audio>
        </div>
    )
}

export default AudioPlayer
