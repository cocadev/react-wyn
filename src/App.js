import React, { Fragment } from 'react'
import { BenchmarkSection } from './sections/BenchmarkSection'
import { DefiningGoalSection } from './sections/DefiningGoalSection'
import { EmailSection } from './sections/EmailSection'
import { IntegratedCalculatorSection } from './sections/IntegratedCalculatorSection'
import { CALCULATOR } from './calculation/default'
import Functions from './calculation/function'
import './style/index'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { CustomPDFA1Section } from './sections/CustomPDFA1Section'
import { CustomPDFA2Section } from './sections/CustomPDFA2Section'
import Utils from './common/utils'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      calculator: CALCULATOR,
      debug: false,
      visible: 'none'
    }
    this.changeCalculator = this.changeCalculator.bind(this)
    this.s2 = React.createRef();
  }

  componentDidMount() {
    this.changeCalculator('industry', 0)
  }

  changeCalculator(type, value) {
    let object = Functions.CALC(this.state.calculator, type, value)
    this.setState({ calculator: object })
  }

  generatePDF = async () => {
    await this.setState({ visible: 'block' })
    const input1 = document.getElementById('CustomPDFA1');
    const input2 = document.getElementById('CustomPDFA2');
    const canvas1 = await html2canvas(input1)
    const canvas2 = await html2canvas(input2)
    const imgData1 = canvas1.toDataURL('image/png', 1.0);
    const imgData2 = canvas2.toDataURL('image/png', 1.0);
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData1, 'PNG', 0, 0, 210, 298);
    pdf.addPage()
    pdf.addImage(imgData2, 'PNG', 0, 0, 210, 298);
    pdf.save(Utils.download(this.state.calculator.email));
    this.setState({ visible: 'none' })
  }

  render() {
    const { calculator, debug, visible } = this.state
    return (
      <Fragment>
        <div className='custom_scroll'>
          <div className="header-black">
            <div style={{ paddingLeft: 10 }}>Development Build July 2020:
            <button style={{ color: 'black', marginLeft: '20px' }} onClick={() => this.setState({ debug: !debug })}>{debug ? 'Hide Debug' : 'Show Debug Info'}</button>
              {debug && <pre id="divIdToPrint" style={{ position: 'fixed', fontSize: 11, zIndex: 1000 }}>
                {JSON.stringify(calculator, null, 2)}
              </pre>}
              {debug && <button onClick={this.generatePDF} style={{ color: 'black' }}>PDF</button>}
            </div>
          </div>

          <BenchmarkSection
            calculator={calculator}
            setCalculator={this.changeCalculator}
            onClick={() => {
              this.s2.current.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <div ref={this.s2}>
            <IntegratedCalculatorSection
              calculator={calculator}
              setCalculator={this.changeCalculator}
            />
          </div>

          <DefiningGoalSection
            calculator={calculator}
            setCalculator={this.changeCalculator}
          />

          <EmailSection 
            downPDF={()=>this.generatePDF()}
            calculator={calculator}
            setCalculator={this.changeCalculator}
          />

          <div className='footer-section'>
            ©Copyright {new Date().getFullYear()}
          </div>

          <div style={{ display: visible }}>
            <CustomPDFA1Section calculator={calculator} />
            <CustomPDFA2Section calculator={calculator} />
          </div>

        </div>
      </Fragment>
    );
  }
}

