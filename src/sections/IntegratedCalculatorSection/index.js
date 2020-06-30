import React from 'react'
import { CustomerTypeInput } from './CustomerTypeInput'
import { WorkOrders } from './WorkOrders'
import { WorkSites } from './WorkSites'
import { data } from '../../common/data'
import { LocationBreakDownInput } from './LocationBreakDownInput'
import { Fade } from 'react-reveal'
import numeral from 'numeraljs'

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
            <div className="container font">
                <Fade top>
                    <div className="row m-b-lg">
                        <div className="col-lg-12 text-center">
                            <center>
                                <div className="f-36 m-t-xl" style={{ marginTop: 100 }}>
                                    {data.SECTION2_HEADER1}
                                    <br />
                                    {data.SECTION2_HEADER2}
                                </div>
                            </center>
                        </div>
                    </div>
                </Fade>

                <center>
                    <div style={{ background: '#f0f0f0', height: 1, width: '100%', margin: '-20px 0 40px' }}></div>
                </center>

                <Fade bottom>
                    <CustomerTypeInput {...props} />
                    <WorkOrders {...props} />
                    <WorkSites {...props} />
                    <LocationBreakDownInput {...props} />
                </Fade>

                <Fade bottom>
                    <div className="category row ">
                        <div className='col-lg-3 col-xs-12 f-33 resulting'>
                            <div style={{ marginTop: 18, textAlign: 'center' }}>Results:</div>
                        </div>
                        <div className='col-lg-4 col-xs-12 f-33'>
                            <div className='result-text'>
                                <div>{data.SECTION2_BULLET1}</div>
                                <div>{data.SECTION2_BULLET2}</div>
                                <div>{data.SECTION2_BULLET3}</div>
                            </div>
                        </div>
                        <div className='col-lg-1 col-xs-12 f-33'></div>
                        <div className='col-lg-4 col-xs-12 responsive-center2'>
                            <center>
                                <div className='savings'>
                                    <div>{data.SECTION2_RESULTS}</div>
                                    <div>
                                        <span style={{ fontSize: 26 }}>$</span>
                                        <span style={{ fontSize: 45 }}>{formatter.to(savings_dollars)}</span>
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