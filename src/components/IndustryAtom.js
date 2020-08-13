import React from 'react'
import { images } from '../common/images'
import Utils from '../common/utils'

export const IndustryAtom = ({
    budget_old,
    order_value_old,
    budget_new,
    order_value_new,
    savings_dollars,
    savings_percentage,
    pdf
}) => {
    return (
        <center>
            <div className={`row container ${pdf ? 'pdf-arrow' : 'graphy'}`}>
                <Graph
                    value={Utils.val(budget_old)}
                    title1={'Before - Annual Costs'}
                    subtitle1={'Average Order Cost:'}
                    subtitle1value={`$${order_value_old}`}
                    title4={'Admin Overhead'}
                    class={pdf ? 'pdf-s1-square1' : 's1-square1'}
                    hours={'465 hours'}
                    background={'#FFFFFF'}
                    resultsvalue={'#000000'}
                    resultssubvalue={'#000000'}
                    resultslabel={'#000000'}
                    img1={images.fill1}
                    img2={images.fill4}
                    pdf={pdf}
                />
                <Graph
                    value={Utils.val(budget_new)}
                    title1={'After - Annual Costs'}
                    subtitle1={'Intact Order Cost:'}
                    subtitle1value={`$${order_value_new}`}
                    title4={'Admin Overhead'}
                    class={pdf ? '' : 's1-square2'}
                    hours={'15 hours'}
                    background={'#e6e6e6'}
                    resultsvalue={'#000000'}
                    resultssubvalue={'#000000'}
                    resultslabel={'#656565'}
                    img1={images.fill2}
                    img2={images.fill5}
                    pdf={pdf}
                />
                <Graph
                    id={3}
                    value={Utils.val(savings_dollars)}
                    title1={'Intact Savings'}
                    subtitle1={'Savings Per Order:'}
                    subtitle1value={`${savings_percentage}%`}
                    title4={'Labour Saved'}
                    class={pdf ? 'pdf-s1-square3' : 's1-square3'}
                    hours={'450 hours'}
                    background={'#000'}
                    resultsvalue={'#ffc200'}
                    resultssubvalue={'#FFFFFF'}
                    resultslabel={'#e6e6e6'}
                    img1={images.fill3}
                    img2={images.fill6}
                    pdf={pdf}
                />
            </div>
        </center>
    )
}

function Graph(props) {
    const pdf = props.pdf
    return (
        <div className={pdf ? "col-xs-4 flex-center" : "col-md-4 col-sm-12 col-xs-12 flex-center"}>
            <div className={props.class}>
                <div
                    className={pdf ? 'pdf-graph-view' :'graph-view'}
                    style={{
                        '--img1': `url(${props.img1})`,
                        '--img2': `url(${props.img2})`
                    }}
                >
                    <div className={pdf ? 'col-xs-12' : 'col-md-12 col-sm-6 col-xs-6'}>
                        <div className={pdf ? 'pdf-s1-title1' : 's1-title1'} style={{ "color": props.resultslabel }}>
                            {props.title1}
                        </div>
                        <div className={pdf ? 'pdf-s1-value' : 's1-value'} style={{ "color": props.resultsvalue }}>
                            ${props.value}
                        </div>
                    </div>

                    <div className={pdf ? 'col-xs-12' : 'col-md-12 col-sm-6 col-xs-6'}>
                        <div className={pdf ? 'pdf-s1-title1' : 's1-title1'} style={{ "color": props.resultslabel }}>
                            {props.title2}
                        </div>
                        <div className={pdf ? 'pdf-s1-title1' : 's1-title1'} style={{ "color": props.resultslabel }}>
                            {props.subtitle1}
                            <span style={{ color: props.resultssubvalue }}>
                                {props.subtitle1value}
                            </span>
                        </div>
                        <div className={pdf ? 'pdf-s1-title1' : 's1-title1'} style={{ "color": props.resultslabel }}>
                            {props.title4 + ": "}
                            <span style={{ "color": props.resultssubvalue }}>
                                {props.hours}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        // <div className="col-xs-4 flex-center">
        //     <div className={props.class}>
        //         <div
        //             className='pdf-graph-view'
        //             style={{'--img1': `url(${props.img1})`}}
        //         >
        //             <div className="col-xs-12">
        //                 <div className="pdf-s1-title1" style={{ "color": props.resultslabel }}>
        //                     {props.title1}
        //                 </div>
        //                 <div className="pdf-s1-value" style={{ "color": props.resultsvalue }}>
        //                     ${props.value}
        //                 </div>
        //             </div>

        //             <div className="col-xs-12">
        //                 <div className="pdf-s1-title1" style={{ "color": props.resultslabel }}>
        //                     {props.title2}
        //                 </div>
        //                 <div className="pdf-s1-title1" style={{ "color": props.resultslabel }}>
        //                     {props.subtitle1}
        //                     <span style={{ color: props.resultssubvalue }}>
        //                         {props.subtitle1value}
        //                     </span>
        //                 </div>
        //                 <div className="pdf-s1-title1" style={{ "color": props.resultslabel }}>
        //                     {props.title4 + ": "}
        //                     <span style={{ "color": props.resultssubvalue }}>
        //                         {props.hours}
        //                     </span>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}