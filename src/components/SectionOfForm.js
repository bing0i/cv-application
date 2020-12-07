import { Component } from 'react'
import uniqid from 'uniqid';
import '../styles/SectionOfForm.css'

class SectionOfForm extends Component {
  constructor(props) {
    super(props);

    let initialInpValues = [];
    if (this.props.info) {
      initialInpValues = this.props.info;
    }
    this.state = {
      inpValues: initialInpValues,
    };

    this.id = uniqid();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e, index) {
    let newInpValues = this.state.inpValues.slice();
    newInpValues[index] = e.target.value;
    this.setState({
      inpValues: newInpValues,
    });

    this.props.sendInfo(newInpValues);
  }

  render() {
    const { 
      sectionName, 
      inpWthLbs, 
      id,
    } = this.props;

    const {
      inpValues,
    } = this.state;

    return (
      <div>
        <section id={id} className="sect">
          <h1 className="sectionName">{sectionName}</h1>

          {
            inpWthLbs.map((inpWthLb, index) => {
              return (
                <div className="inpWthLb" key={this.id}>
                  <label htmlFor={this.id}>{inpWthLb.lbText}</label>
                  <br/>
                  <input
                    id={this.id}
                    className="inp"
                    type={inpWthLb.inpType}
                    value={inpValues[index]} 
                    onChange={(e) => {this.handleInputChange(e, index)}}
                    autoComplete="off" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                  />
                </div>
              );
            })
          }
        </section>
      </div>
    );
  }
}

export default SectionOfForm;