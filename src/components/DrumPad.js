import React, { Component } from 'react'

class DrumPad extends Component {
    constructor(props) {
        super(props)

        this.playSound = this.playSound.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    playSound(e) {
        const sound = document.getElementById(this.props.keyTrigger)
        sound.currentTime = 0
        sound.play()

        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '))
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound()
        }
    }

    render() {
        const { clipId, clip, keyTrigger, keyCode } = this.props

        return (
            <div id={clipId} onClick={this.playSound} className="drum-pad">
                <audio id={keyTrigger} className="clip" src={clip} />
                <h2>{keyTrigger}</h2>
            </div>
        )
    }
}

export default DrumPad
