import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';
import numeral from 'numeraljs'

export const LocationBreakDownInput = (props) => {
    const { calculator, setCalculator } = props
    return (
        <div className='container' style={{ marginTop: 20 }}>
            <div className='col-md-5 col-sm-5 col-xs-12 f-26 m-t-15 responsive-center'>
                Location BreakDown:
            </div>
            <div className='col-md-7 col-sm-7 col-xs-12 f-36' style={{ display: 'flex', justifyContent: 'space-around' }}>
                <FormGroup role="form" className='location-break'>
                    <div className='f-18'>CBD</div>
                    <FormControl
                        type="text"
                        className="form-break"
                        // value={numeral(geo_cbd).format('0%')}
                        value={numeral(calculator.geo_cbd).format('0%')}
                        placeholder={'%'}
                        onChange={e => setCalculator('cbd', e.target.value)}
                    />
                    <div className='f-18'>Metro</div>
                    <FormControl
                        type="text"
                        className="form-break"
                        value={numeral(calculator.geo_metro).format('0%')}
                        onChange={e => setCalculator('metro', e.target.value)}
                    />
                    <div className='f-18'>Regional</div>
                    <FormControl
                        type="text"
                        className="form-break"
                        value={numeral(calculator.geo_regional).format('0%')}
                        onChange={e => setCalculator('regional', e.target.value)}
                    />
                </FormGroup>
            </div>
        </div>
    )
}