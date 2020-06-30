import React from 'react'
import { InputSlider } from '../../components/InputSlider'
import numeral from 'numeraljs'
import get from 'lodash.get'

export const WorkOrders = ({ calculator, setCalculator }) => {

    const formatter = {
        to: (num) => {
            return numeral(num).format('0a')
        },
        from: (str) => {
            return numeral(str).value()
        }
    }

    const sliderOptions = {
        range: {
            min: 1,
            '25%': 10,
            '50%': 100,
            '75%': 1000,
            max: 20000
        },
        start: calculator.orders,
        tooltips: formatter,
        pips: {
            mode: 'steps',
            density: 25,
            stepped: true,
            format: formatter
        },
        onChange: (args) => {
            const sliderValue = get(args, '[0]')
            setCalculator('orders', numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider
            label={"Work Orders"}
            description="Switch to Square Meterage"
            value={formatter.to(calculator.orders)}
            options={sliderOptions}
        />
    )
}

