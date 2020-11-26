import { Component } from 'react';
import Section from './components/Section';

class App extends Component {
  constructor(props) {
    super(props);

    this.inpWthLbs = [
      {lbText: 'Name', inpType: 'text'}, 
      {lbText: 'Email', inpType: 'email'},
      {lbText: 'Phone number', inpType: 'tel'},
    ];

    this.inpWthLbs2 = [
      {lbText: 'School name', inpType: 'text'}, 
      {lbText: 'Title of study', inpType: 'text'},
      {lbText: 'Date of study', inpType: 'date'},
    ];

    this.inpWthLbs3 = [
      {lbText: 'Company name', inpType: 'text'}, 
      {lbText: 'Position title', inpType: 'text'},
      {lbText: 'Main tasks', inpType: 'text'},
      {lbText: 'From', inpType: 'date'},
      {lbText: 'To', inpType: 'date'},
    ];
  }

  render() {
    return (
      <div className="App">
        <form class="form">
          <Section id="contactInfo" inpWthLbs={this.inpWthLbs} />
          <Section id="educationInfo" inpWthLbs={this.inpWthLbs2} />
          <Section id="experienceInfo" inpWthLbs={this.inpWthLbs3} />
        </form>
        <button type="submit">Submit</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default App;
