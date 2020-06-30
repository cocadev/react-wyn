import React from 'react'
import { InputSlider } from '../../components/InputSlider'
import numeral from 'numeraljs'
import get from 'lodash.get'
import { data } from '../../common/data'

export const WorkSites = ({ calculator, setCalculator }) => {

    const formatter = {
        to: (num) => {
            return numeral(num).format('(0a)')
        },
        from: (str) => {
            return numeral(str).value()
        }
    }

    const sliderOptions = {
        range: {
            min: 1,
            '25%': data.CALCULATOR_DEFAULTS[calculator.industry].sites_slider_25,
            '50%': data.CALCULATOR_DEFAULTS[calculator.industry].sites_slider_50,
            '75%': data.CALCULATOR_DEFAULTS[calculator.industry].sites_slider_75,
            max: data.CALCULATOR_DEFAULTS[calculator.industry].sites_slider_max
        },
        start: calculator.sites || 1,
        tooltips: formatter,
        pips: {
            mode: 'steps',
            density: 25,
            stepped: true,
            format: formatter
        },
        onChange: (args) => {
            const sliderValue = get(args, '[0]')
            setCalculator('sites', numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider
            label="Sites"
            value={formatter.to(calculator.sites)}
            options={sliderOptions}
        />
    )
}

