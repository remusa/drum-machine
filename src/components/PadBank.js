import React, { Component } from 'react'

import DrumPad from './DrumPad'

class PadBank extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const padBank = this.props.padBank.map(item => {
            const { id, keyCode, keyTrigger, url } = item
            const { updateDisplay } = this.props

            return (
                <DrumPad
                    key={id}
                    clipId={id}
                    clip={url}
                    keyTrigger={keyTrigger}
                    keyCode={keyCode}
                    updateDisplay={updateDisplay}
                />
            )
        })

        return <div className="pad-bank">{padBank}</div>
    }
}

export default PadBank
