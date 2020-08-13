import React from 'react'
import { data } from '../common/data'
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import SweetAlert from 'react-bootstrap-sweetalert';
import * as EmailValidator from 'email-validator';
import { images } from '../common/images';
import numeral from 'numeraljs'

require('dotenv').config()

export const EmailSection = (props) => {
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [show, setShow] = React.useState(0);
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
    const sendNow = async () => {
        console.log('sendNow Attempting email')
        props.downPDF()

        let validating = EmailValidator.validate(email)
        if (!validating) {
            setShow(3)
            return false
        }

        try {
            var api_key = process.env.REACT_APP_MAILGUN_KEY;
            var domain = 'mail.wyn.io';
            var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
            var data = {
                from: 'Team Enquiry<team+enquiry@wyn.io>',
                to: 'team+enquiry@wyn.io',
                subject: 'Form Enquiry From Widget Demo',
                text: `Enquiry from https://widget-demo.netlify.app/ with values of Email: ${email} and Phone:${phone} \n Result: ${formatter.to(props.calculator.savings_dollars)}` // TODO: Calculator Debug String Values: ${JSON.stringify(calculator, null, 2)}'
            };
            mailgun.messages().send(data, function (error, body) {
                console.log(body);
            });

            setShow(1)
        } catch (e) {
            console.log(`sendNow Catch: ${e}`)
            setShow(2)
        } finally {

        }
    }

    return (
        <section className="font m-b-xl">
            <div className="container-fluid" style={{ marginTop: 100, padding: '60px 0 70px', background: '#FFBF00' }}>
                <Fade top>
                    <center>
                        <div className="f-36 text-center" style={{ marginBottom: 20, color: 'black' }}>
                            {data.SECTION4_HEADER}
                        </div>
                    </center>
                </Fade>
                <div className="container">
                    <Fade left>
                        <center>
                            <FormGroup role="form" className='download-report'>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                    <FormControl
                                        type="text"
                                        className="custom-input "
                                        placeholder="Work Email*"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            props.setCalculator('email', e.target.value)}
                                        }
                                    />
                                </div>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                    <FormControl
                                        type="text"
                                        className="custom-input"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            props.setCalculator('phone', e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <Button 
                                        className="btn report-btn" 
                                        type="submit" 
                                        onClick={() => sendNow()}
                                    >
                                        SEND REPORT
                                    </Button>
                                </div>
                            </FormGroup>
                        </center>
                    </Fade>
                </div>
            </div>

            <div className="container text-center" style={{ marginBottom: 40 }}>
                <Fade top>
                    <center>
                        <div className="f-36 text-center" style={{ marginBottom: -20, marginTop: 50 }}>
                            {data.SECTION4_HEADER2}
                        </div>
                    </center>
                </Fade>
                <Fade right>
                    <div className='container' style={{ marginTop: 50 }}>{
                        data.SECTION4_CUSTOMER_LIST.map((item, index) =>
                            <div className='col-md-3 col-xs-3 Lululemon' key={index}>
                                <img src={item.img} className="customer-logo" alt="{}" />
                                <div>{item.title}</div>
                            </div>)
                    }
                    </div>
                </Fade>
                <img src={images.intactGroup} className='intactGroup' alt={'intact group img'}/>
            </div>
            {show === 1 &&
                <SweetAlert
                    success
                    title={data.S4_EMAIL_OK}
                    show={show === 1}
                    closeOnClickOutside
                    allowEscape
                    onConfirm={() => setShow(0)}
                >
                    The Intact team will be in touch with your report shortly! In the meantime, why not visit <a href="http://intactgroupau.com/">Intactgroupau.com</a> for more information.
                </SweetAlert>}
            {show === 2 &&
                <SweetAlert
                    danger
                    title={data.S4_EMAIL_ERROR}
                    show={show === 2}
                    closeOnClickOutside
                    allowEscape
                    onConfirm={() => setShow(0)}
                >
                    Our report feature is almost done! We\'ll reach once this is ready for production. In the meantime, why not visit <a href="http://intactgroupau.com/">Intactgroupau.com</a> for more information.
                </SweetAlert>}
            {show === 3 &&
                <SweetAlert
                    warning
                    title={data.S4_EMAIL_INVALID}
                    show={show === 3}
                    closeOnClickOutside
                    allowEscape
                    onConfirm={() => setShow(0)}
                >
                    {data.S4_EMAIL_INVALID_BODY}
                </SweetAlert>}

        </section>
    )
}

// show = 0 non modal
// show = 1 success modal
// show = 2 not sent email modal
// show = 3 email wrong modal