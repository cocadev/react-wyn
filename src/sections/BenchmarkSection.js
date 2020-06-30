import React from 'react'
import { data } from '../common/data'
import Utils from '../common/utils'
import { Fade } from 'react-reveal'
import Services from '../calculation/service'

export const BenchmarkSection = (props) => {
    const { setCalculator, onClick } = props;
    const { industry } = props.calculator
    const { sub_sector, maintenance_budget, order_cost, savings } = data.BENCHMARKS[industry]

    return (
        <section id="features" className="services font">
            <div>
                <div className="col-lg-12 text-center">
                    <Fade top>
                        <center><div className="f-24" style={{ color: 'orange', marginBottom: 5}}>{'Calculating Your ROI For'}</div></center>
                        <center><div className="f-36">{data.SECTION1_HEADER}</div></center>
                    </Fade>
                </div>
                <div>
                    <div className="m-t-lg">
                        <Fade top><center><div className="f-24 text-center">{data.SECTION1_DESCRIPTION}</div></center></Fade>
                        <div className="row industry-view">
                            <div className="container s1-view">
                                {
                                    data.BENCHMARKS.map((item, index) =>
                                        <div className="col-lg-2 col-md-3 col-xs-4" key={index} style={{ marginBottom: -2 }}>
                                            <Fade right >
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
                            <center><div className="row container">
                                <Graph 
                                    value={Utils.val(order_cost)} 
                                    percentage={Services.IndustrySavings(order_cost, '0', 'order')} 
                                    title1={'Before - Annual Costs'} 
                                    title2={'Average Cost per Work'}
                                    title3={'Order: $180'}
                                    title4={'Labour Hours'}
                                    class={'s1-squqre1'}
                                    background={'#EBF0F6'}
                                    hours={'1.25h'}
                                />
                                <Graph 
                                    value={Utils.val(savings)} 
                                    percentage={Services.IndustrySavings(savings, maintenance_budget, 'savings')} 
                                    title1={'After - Annual Costs'} 
                                    title2={'Average Cost per Work'}
                                    title3={'Order: $144'}
                                    title4={'Labour Hours'}
                                    class={'s1-squqre2'}
                                    background={'#F2F5F8'}
                                    hours={'15h'}
                                />
                                <Graph 
                                    value={Utils.val(maintenance_budget)} 
                                    percentage={Services.IndustrySavings(maintenance_budget, '0', 'budget')} 
                                    title1={'The Intact Difference'} 
                                    title2={'Savings'}
                                    title3={'Savings per Work Order: 20%'}
                                    title4={'Labour Saved'}
                                    class={'s1-squqre3'}
                                    background={'#FCFCFD'}
                                    hours={'286 hours'}
                                />
                            </div></center>
                        </Fade>
                        <Fade bottom>
                            <div className="flex-center">
                                <div className="f-24" style={{ marginTop: 50, fontWeight: '600', fontSize: 20 }}>
                                    Source: {sub_sector}
                                </div>
                                <div className="cal-btn" onClick={onClick}>
                                    CALCULATE YOUR SAVINGS
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Graph(props) {
    return (
        <div className="col-lg-4 col-xs-12 flex-center" >
            <div className={props.class} style={{ marginTop: 32 }}>
                <div className="pointer1" />
                <div className="pointer" style={{ "--background": props.background}}/>
                <div style={{ width: 300, position: 'relative', paddingTop: 21, }}>
                    <div className="s1-title1">{props.title1}</div>
                    <div className="s1-value">${props.value}</div>
                    <div className="s1-title2">{props.title2}</div>
                    <div className="s1-title3">{props.title3}</div>
                    <div className="s1-bar"/>
                    <div className="s1-title1">
                        {props.title4 + ": "}
                        <span style={{ color: '#000', opacity: 1, fontWeight: '500'}}>{props.hours}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Benchmarks(props) {
    let img = props.img;
    let fontWeight = '400';
    let object = 'ben-none';
    if (props.industry === props.id) {
        // img = props.img_selected
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
            // onMouseOver={e => e.currentTarget.src = props.industry !== props.id ? props.img : e.currentTarget.src}
            // onMouseOut={e => e.currentTarget.src = props.industry !== props.id ? props.img : props.img}
            />
            <div style={{ fontWeight }}>{props.title}</div>
        </div>
    )
}