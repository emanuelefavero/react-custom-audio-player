import React from 'react'
import Button from './Button'
import './ControlPanel.css'

function ControlPanel({ play, isPlaying }) {
    return (
        <div className='control-panel'>
            <Button play={play} isPlaying={isPlaying} />
        </div>
    )
}
export default ControlPanel
