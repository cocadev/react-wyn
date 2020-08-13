import React from 'react'
import { data } from '../common/data'
import { Fade } from 'react-reveal'
import { IndustryAtom } from '../components/IndustryAtom'

export const BenchmarkSection = (props) => {
    const { setCalculator, onClick } = props;
    const { industry, budget_new, budget_old, savings_dollars, order_value_old, order_value_new, savings_percentage } = props.calculator
    const { sub_sector } = data.BENCHMARKS[industry]
    return (
        <div>
            <div className="header-black">
                <Fade top>
                    <center><div className="brightsubheading">{'Calculating Your ROI For'}</div></center>
                    <center><div className="blacksubheading">{data.SECTION1_HEADER}</div></center>
                </Fade>
            </div>
            <div className="m-t-lg">
                <Fade top>
                    <center>
                        <div className="f-18 text-center width-1200" style={{ marginTop: 5 }}>
                            {data.SECTION1_DESCRIPTION}
                        </div>
                    </center>
                </Fade>
                <div className="industry-view">
                    <div className="container" style={{ marginBottom: -2, display: 'flex', justifyContent: 'center' }}>
                        {
                            data.BENCHMARKS.map((item, index) =>
                                <div key={index} >
                                    <Fade right>
                                        <Benchmarks
                                            industry={industry}
                                            id={index}
                                            title={item.title}
                                            img={item.img}
                                            img_selected={item.img_selected}
                                            onClick={() => { setCalculator('industry', item.id) }}
                                        />
                                    </Fade>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Fade left>
                    <IndustryAtom 
                        budget_old={budget_old}
                        order_value_old={order_value_old}
                        budget_new={budget_new}
                        order_value_new={order_value_new}
                        savings_dollars={savings_dollars}
                        savings_percentage={savings_percentage}
                        pdf={false}
                    />
                </Fade>
                <Fade bottom>
                    <div className="flex-center">
                        <div className="f-24 source">
                            Source: {sub_sector}
                        </div>
                        <div className="cal-btn" onClick={onClick}>
                            CALCULATE YOUR SAVINGS
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

function Benchmarks(props) {
    let img = props.img;
    let fontWeight = '400';
    let object = 'ben-none';
    if (props.industry === props.id) {
        fontWeight = '700'
        object = 'ben-select'
    }
    return (
        <div
            onClick={props.onClick}
            className={`text-center f-18 benchmarks ${object}`}
        >
            <img
                src={img}
                alt="{icon}"
                className='icon-round'
            />
            <div className='img-title' style={{ fontWeight }}>{props.title}</div>
        </div>
    )
}

