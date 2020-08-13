import React, { useState, useEffect } from 'react'
import { images } from '../common/images'

export const DefiningGoalPDFSection = props => {
    const { 
        cost_per_work_order, 
        average_response_time, 
        technician_level,
        positionX, positionY 
    } = props.calculator;
    const [width, setWidth] = useState(180);
    const [height, setHeight] = useState(140);

    useEffect(() => {
        setWidth(180 + parseInt(positionX))
        setHeight(140 + parseInt(positionY))
    }, [positionX, positionY])

    return (
        <section id="pricing" className="services font">
            <div className="container">
                <div className="col-xs-6 flex-center">
                    {width + '-' + height}
                    <div className="tri-text text-center" style={{ marginLeft: 1, marginBottom: 10 }}> Lowest Cost </div>
                    <div style={{ height: '314px', width: '314px', position: 'relative', }}>
                        <div
                            className='mydots'
                            style={{
                                background: '#ffc200', position: 'absolute',
                                marginTop: height + 38, marginLeft: width - 38
                            }}
                        />
                        <div className='box' />
                    </div>
                    <div className='pdf-tri-view'>
                        <div className="tri-text">Fastest Response</div>
                        <div className="tri-text">Highest Quality</div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6 pdf-goal-panel">
                    <CostItem
                        title1={'Average Cost'}
                        title2={'Per Work Order:'}
                        value={`$${cost_per_work_order}`}
                    />
                    <CostItem
                        title1={'Average'}
                        title2={'Response Time:'}
                        value={`${average_response_time}`}
                    />
                    <CostItem
                        title1={'Technician'}
                        title2={'Seniority Level:'}
                        value={technician_level}
                    />
                </div>
            </div>
            <img src={images.pdfBackground1} alt={'PDF Logo'} className='pdf-background-2' />
        </section>
    )
}

function CostItem(props) {
    return (
        <div className='pdf-container-row-around'>
            <div className="pdf-average-cost">
                {props.title1}
                <br />
                {props.title2}
            </div>
            <div className='pdf-cost-item'>
                {props.value}
            </div>
        </div>
    )
}
