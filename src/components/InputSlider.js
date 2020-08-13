import React from 'react'
import Nouislider from 'nouislider-react'
import { SelectionOutput } from './SelectionOutput'
import './slider-style.css'

export const InputSlider = ({ label, description, value, options = {} }) => {
    options = {
        connect: 'lower',
        pips: {
            mode: 'steps',
            stepped: true,
            density: 2
        },
        animate: true,
        animationDuration: 300,
        behaviour: 'tap',
        ...options
    }
    return (
        <div className="container" style={{ marginTop: 30 }}>
            <div className="col-md-5 col-sm-5 col-xs-12 responsive-center">
                <SelectionOutput {...{ label, description, value }} />
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12 p-h-md">
                <Nouislider{...options} />
            </div>
        </div>
    )
}

