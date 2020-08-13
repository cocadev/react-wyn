import React from 'react'
import { images } from '../common/images'
import { DefiningGoalPDFSection } from './DefiningGoalPDFSection'
import { data } from '../common/data';
import numeral from 'numeraljs'
import Utils from '../common/utils';

export const CustomPDFA1Section = (props) => {
    const {calculator} = props;
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
        <div className="container">
            <div id="CustomPDFA1">
                <img src={images.bar} alt={'PDF Logo'} style={{ width: 1167, zIndex: -1 }} />
                <img src={images.pdfBackground2} alt={'PDF Logo'} className='pdf-background-1' />

                <div className='pdf-box'>
                    <div className='pdf-title-1'>
                        {Utils.email(props.calculator.email)}
                    </div>
                    <div className='pdf-title-2'>The Facilities Maintenance Revolution</div>
                    <div className='pdf-word'>
                        <br />
                        <span style={{ fontSize: 27 }}>
                            Prepared For: Customer.com <br />
                            Date: July 2020 <br /><br />
                        </span>

                        What’s the financial benefit of switching from<br />
                        self-managed property repairs to an integrated services<br />
                        provider? Intact Group has prepared a custom projection<br />
                        for you based on your 36 sites.

                    </div>
                    <img src={images.pdfWorks} alt={'PDF Logo'} className='pdf-works' />
                    <div className='pdf-title-3'>
                        <span>
                            Your Results
                        </span>
                        <img src={images.linebar} className='line-bar' alt='linebar' />
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-xs-6'>
                            <div className='pdf-item'>
                                Customer Type: {data.BENCHMARKS[calculator.industry].title} <br />
                                Work Orders: {calculator.orders}<br />
                                Sites: {calculator.sites} <br />
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-6' style={{ marginTop: 20 }}>
                            <div className='col-md-4 col-xs-4 pdf-result'>
                                Results:
                            </div>
                            <div className='col-md-8 col-xs-8 pdf-atom'>
                                Eliminate call out fees <br />
                                Consolidate work orders <br />
                                Don't pay for unused labour <br />
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: 20 }}>
                        <div className='col-md-6 col-xs-6'>
                            <div style={{ position: 'relative' }}>
                                <div className='pdf-card'>
                                    Location Breakdown: CBD {calculator.geo_cbd * 100}% <br />
                                    Metro {calculator.geo_metro * 100}% <br />
                                    Regional {calculator.geo_regional}% <br />
                                </div>
                                <img src={images.rect1} className='pdf-rect1' alt='rect1' />
                                <img src={images.rect2} className='pdf-rect2' alt='rect2' />
                                <img src={images.rect2} className='pdf-rect21' alt='rect2' />
                                <img src={images.rect3} className='pdf-rect3' alt='rect3' />
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-6'>
                            <div className='pdf-savings'>
                                <span style={{ textAlign: "center" }}>
                                    Projected <br />
                                    Annual Savings: <br />
                                </span>
                                <span className='pdf-value'>
                                    {formatter.to(calculator.savings_dollars)}
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='pdf-title-3' style={{ marginTop: 80 }}>
                        <span>
                            Your Maintenance Priorities
                        </span>
                        <img src={images.linebar} className='line-bar' style={{ marginLeft: 630 }} alt='linebar' />

                    </div>
                    <div className='pdf-word' style={{ marginTop: -10, marginBottom: 30 }}>
                        A single line of explanatory text here.
                    </div>

                </div>
                
                <DefiningGoalPDFSection calculator={props.calculator} />

                <div className='pdf-footer'>

                </div>
            </div>
        </div>
    )
}
