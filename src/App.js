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

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      calculator: CALCULATOR,
      debug: false
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

  generatePDF = () => {
    const input = document.getElementById('divIdToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
  }

  render() {
    const { calculator, debug } = this.state
    return (
      <Fragment>
        <div style={{ paddingLeft: 10 }}>Development Build June 2020: {debug && <button onClick={this.generatePDF}>PDF</button>}</div>
        <button onClick={() => this.setState({ debug: !debug })}>{debug ? 'Hide' : 'Debug Values'}</button>
        {debug && <pre id="divIdToPrint" style={{ position: 'fixed', fontSize: 11, zIndex: 1000 }}>
          {JSON.stringify(calculator, null, 2)}
        </pre>}

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

        <EmailSection />

        <div className='footer-section'>
          ©Copyright {new Date().getFullYear()}
        </div>
      </Fragment>
    );
  }
}

