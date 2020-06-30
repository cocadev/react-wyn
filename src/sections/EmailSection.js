import React from 'react'
import { data } from '../common/data'
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
// import get from 'lodash.get'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import mailgun from 'mailgun-js'
//import JSON from 'json-stringify-safe'

export const EmailSection = (props) => {
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();

    const sendNow = async () => {


        // window.location.href="https://wyn.io";

        //window.location.href=`mailto:team@wyn.io?subject=Reporting&body=New Enquiry From Body:Great \n Enquiry from: email: ${email} - phone number: ${phone} `
        console.log('sendNow Attempting email')
        //props.onSend()
        try {
            // const sendMailUrl = '/.netlify/functions/sendmail'
            // const origin = get(window, 'location.origin')
            // setSending(true)
            // let fetchResult = await fetch(sendMailUrl, {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email: 'hi there?'
            //     })
            // })
            // fetchResult = await fetchResult.json()
            // setSendResult(fetchResult)
            var api_key = 'b978eb397f3c83825d65989635f9e45d-1df6ec32-7019b694';
            var domain = 'mail.wyn.io';
            var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
            // const { calculator } = this.state

            var data = {
                from: 'Team Enquiry<team+enquiry@wyn.io>',
                to: 'team+enquiry@wyn.io',
                subject: 'Form Enquiry From Widget Demo',
                text: `Enquiry from https://widget-demo.netlify.app/ with values of Email: ${email} and Phone:${phone} \n ${JSON.stringify(props.calculator, null, 2)}` // TODO: Calculator Debug String Values: ${JSON.stringify(calculator, null, 2)}'
            };

            mailgun.messages().send(data, function (error, body) {
                console.log(body);
            });

            toast('Thanks! The Wyn team will be in touch with your demo report shortly!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (e) {
            // setSendResult({
            //     message: e.message,
            //     status: 'NOT-OK'
            // })
            console.log(`sendNow Catch: ${e}`)

            toast.error('Sorry looks like a problem with our email service. Why not head over to <a href wyn.io>Wyn.io</a> and chat to us directly.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } finally {
            // setSending(false)
        }
    }

    return (
        <section className="font m-b-xl">
            <div className="container-fluid" style={{ marginTop: 100, padding: '60px 0 70px', background: '#22399E' }}>
                <Fade top>
                    <center>
                        <div className="f-36 text-center" style={{ marginBottom: 20, color: 'white' }}>
                            {data.SECTION4_HEADER}
                        </div>
                    </center>
                </Fade>
                <div className="container">
                    <Fade left>
                        <center>
                            <FormGroup role="form" className='download-report' >
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <FormControl
                                        type="text"
                                        className="custom-input"
                                        placeholder="Work Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <FormControl
                                        type="text"
                                        className="custom-input"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12">
                                    <Button className="btn report-btn" type="submit" onClick={() => sendNow()}>SEND REPORT</Button>
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
                            <div className='col-lg-3 col-md-3 col-sm-6' key={index} style={{ height: 210 }}>
                                <a href="https://wyn.io"><img src={item.img} className="customer-logo" alt="{}" />
                                <div className='Lululemon'>{item.title}</div></a>
                            </div>)
                    }
                    </div>
                </Fade>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </section>
    )
}