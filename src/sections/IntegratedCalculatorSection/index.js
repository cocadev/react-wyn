import React from 'react'
import numeral from 'numeraljs'
import { CustomerTypeInput } from './CustomerTypeInput'
import { WorkOrders } from './WorkOrders'
import { WorkSites } from './WorkSites'
import { data } from '../../common/data'
import { LocationBreakDownInput } from './LocationBreakDownInput'
import { Fade } from 'react-reveal'

export const IntegratedCalculatorSection = (props) => {
    const {savings_dollars} = props.calculator;
    const formatter = {
        to: (num) => {
            if (num > 1000000) {
                return numeral(num).format('(0.00a)')
            } else {
                return numeral(num).format('(0a)')
            }
        },
        from: (str) => {
            return numeral(str).value()
        }
    }
    return (
        <section id="contact">
             <div className="header-black-2">
                    <Fade top>
                        <center><div className="brightsubheading">{data.SECTION2_HEADER1}</div></center>
                        <center><div className="blacksubheading">{data.SECTION2_HEADER2}</div></center>
                    </Fade>
                </div>
            <div className="container font">

                <Fade bottom>
                    <CustomerTypeInput {...props} />
                    <WorkOrders {...props} />
                    <WorkSites {...props} />
                    <LocationBreakDownInput {...props} />
                </Fade>

                <Fade bottom>
                    <div className="category row">
                        <div className='col-md-2 col-sm-2 col-xs-12 f-33 resulting'>
                            <div style={{ marginTop: 18, textAlign: 'center' }}>Results:</div>
                        </div>
                        <div className='col-md-5 col-sm-5 col-xs-12 f-33'>
                            <div className='result-text'>
                                <div>{data.SECTION2_BULLET1}</div>
                                <div>{data.SECTION2_BULLET2}</div>
                                <div>{data.SECTION2_BULLET3}</div>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-5 col-xs-12 responsive-center2'>
                            <center>
                                <div className='savings'>
                                    <div className='savings-0'>{data.SECTION2_RESULTS}</div>
                                    <div>
                                        <span className='savings-2'>${formatter.to(savings_dollars)}</span>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}