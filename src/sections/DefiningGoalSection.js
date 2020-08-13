import React, { useState } from 'react'
import { data } from '../common/data'
import { Fade } from 'react-reveal'

import Draggable from '../Draggable/Draggable'
let counter = 0;

export const DefiningGoalSection = props => {
    const { setCalculator } = props;
    const { cost_per_work_order, average_response_time, technician_level } = props.calculator
    const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 })
    const [activeDrags, setActiveDrags] = useState(false);
    const handleDrag = (e, ui) => {
        const { x, y } = deltaPosition;
        counter++;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        })

        if (counter % 10 === 0) {
            setCalculator('triangle', { layerX: x, layerY: y })
        }

    };
    return (
        <section id="pricing" className="services font" style={{ marginTop: 40 }}>
            <div className="container">
                <center>
                    <div className="col-lg-12 text-center m-b-lg">
                        <Fade top><center><div className="f-36">{data.SECTION3_HEADER}</div></center></Fade>
                        <Fade top><center><div className="f-24">{data.SECTION3_DESCRIPTION}</div></center></Fade>
                    </div>
                </center>
                <Fade left>
                    <div className="col-lg-6 text-center flex-center m-t-xl">
                        <div className="tri-text text-center" style={{ marginLeft: 1, marginBottom: -30 }}> Lowest Cost </div>
                        <div style={{ height: '314px', width: '314px', position: 'relative', }}>
                            <Draggable
                                bounds="parent"
                                onDrag={handleDrag}
                                defaultPosition={{ x: 142, y: 205 }}
                                onStart={() => setActiveDrags(true)}
                                onStop={() => setActiveDrags(false)}
                            >
                                <div
                                    className='mydots'
                                    style={{ background: activeDrags ? 'white' : '#ffc200' }}
                                />
                            </Draggable>
                            <div className='box' />
                        </div>
                        <div className='container-row tri-view'>
                            <div className="tri-text">Fastest Response</div>
                            <div className="tri-text">Highest Quality</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-lg-6 goal-panel m-t-100">
                        <CostItem title1={'Average Cost'} title2={'Per Work Order:'} value={`$${cost_per_work_order}`} />
                        <CostItem title1={'Average'} title2={'Response Time:'} value={`${average_response_time}`} />
                        <CostItem title1={'Technician'} title2={'Seniority Level:'} value={technician_level} />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

function CostItem(props) {
    return (
        <div className='container-row-around'>
            <div className="average-cost">
                {props.title1}
                <br />
                {props.title2}
            </div>
            <div className='cost-item'>
                {props.value}
            </div>
        </div>
    )
}
