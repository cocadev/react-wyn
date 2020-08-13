import React from 'react'
import { images } from '../common/images'
import { IndustryAtom } from '../components/IndustryAtom'
import { data } from '../common/data'

export const CustomPDFA2Section = (props) => {
    const {
        budget_new,
        budget_old,
        savings_dollars,
        order_value_old,
        order_value_new,
        savings_percentage
    } = props.calculator
    return (
        <div className="container">
            <div id="CustomPDFA2">
                <img src={images.bar} alt={'PDF Logo'} style={{ width: 1167, zIndex: -1 }} />
                <img src={images.pdfBackground2} alt={'PDF Logo'} className='pdf-background-1' />

                <div className='pdf-box'>
                    <div className='pdf-title-3'>
                        <span>
                            About Us
                        </span>
                        <img
                            src={images.linebar}
                            className='line-bar'
                            style={{ marginLeft: 230 }}
                            alt='linebar'
                        />
                    </div>
                    <div className='pdf-word' style={{ marginTop: -30 }}>
                        <img src={images.bar2} alt={'Bar 2'} />
                        <img src={images.bar1} alt={'Bar 1'} className='bar-1' />
                        <img src={images.bar3} alt={'Bar 3'} className='bar-3' />
                        <br /><br />
                        We are Intact. An international property maintenance <br />
                        company that’s big enough to deliver and small enough to <br />
                        make it personal. Our customers are at the heart of <br />
                        everything we do. <br /><br />

                        We’re trusted to maintain all kinds of locations – from multinational retail chains to Government buildings.<br />
                        From providing the best tradespeople to keeping pace with safety compliance and offering simple reporting,<br />
                        we’re committed to making your property maintenance worry- and hassle-free.

                    </div>
                    <img src={images.aboutUs} alt={'PDF Logo'} className='pdf-works' style={{ marginTop: -287, marginRight: 29 }} />
                    <div className='pdf-title-3'>
                        <span>
                            Typical Retail Industry Results
                        </span>
                        <img src={images.linebar} className='line-bar' style={{ marginLeft: 680 }} alt='linebar' />
                    </div>
                    <div className='row'>
                        <div className='pdf-word' style={{ marginTop: -10, marginBottom: 30 }}>
                            A single line of explanatory text here.
                        </div>
                        <IndustryAtom
                            budget_old={budget_old}
                            order_value_old={order_value_old}
                            budget_new={budget_new}
                            order_value_new={order_value_new}
                            savings_dollars={savings_dollars}
                            savings_percentage={savings_percentage}
                            pdf={true}
                        />
                    </div>

                    <div className='pdf-title-3' style={{ marginTop: 20 }}>
                        <span>
                            Our Retail Industry Customers
                        </span>
                        <img src={images.linebar} className='line-bar' style={{ marginLeft: 680 }} alt='linebar' />
                    </div>
                    <div className='pdf-word' style={{ marginTop: -10, marginBottom: 30 }}>
                        A single line of explanatory text here.
                    </div>

                </div>

                <div className='container' style={{ marginTop: -60}}>
                    {
                        data.SECTION4_CUSTOMER_LIST.map(
                            (item, index) =>
                                <div className='col-xs-3 pdf-lululemon' key={index}>
                                    <img src={item.img} className="pdf-customer-logo" alt="{pdf customer logo}" />
                                    <div>{item.title}</div>
                                </div>
                        )
                    }
                </div>

                <div style={{ height: 295, position: 'relative', marginTop: 70 }}>
                    <img src={images.background} className="background3" alt="{Background3}" />
                    <img src={images.triangle4} className="triangle4" alt="{Triangle4}" />
                    <img src={images.bitmap} className="bitmap" alt="{Bitmap}" />
                    <img src={images.Rectangle} className="Rectangle" alt="{Rectangle}" />
                    <img src={images.people} className="people-img" alt="{People}" />

                    <div className='phone-detail'>
                        <div>For More Information</div>
                        <div style={{ fontSize: 29, color: '#0076FF', textDecoration: 'underline'}}>Contact Intact Group</div>
                        <div style={{ fontSize: 36 }}>
                            <img src={images.phone} className="phone" alt="{phone}" />
                            Call +1300 123 456
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
