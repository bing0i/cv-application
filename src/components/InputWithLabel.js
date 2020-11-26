import { Component } from 'react';
import uniqid from 'uniqid';

class InputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpValue: '',
    };

    this.id = uniqid();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inpValue: event.target.value,
    });
  }

  render() {
    const { inpValue } = this.state;
    const { lbText, inpType } = this.props
    return (
      <div className="inpWthLb">
        <label htmlFor={this.id}>{lbText}</label>
        <input
          id={this.id}
          className="inp"
          type={inpType}
          value={inpValue} 
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputWithLabel;