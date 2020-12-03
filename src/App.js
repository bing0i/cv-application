import { Component } from 'react';
import Section from './components/Section';
import './styles/App.css'

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

    this.state = {
      isSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  handleEdit() {
    this.setState({isSubmitted: false});
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isSubmitted 
          ? <button onClick={this.handleEdit}>Edit</button>
          : <form className="form">
              <Section id="contactInfo" sectionName="Contact" inpWthLbs={this.inpWthLbs} />
              <Section id="educationInfo" sectionName="Education" inpWthLbs={this.inpWthLbs2} />
              <Section id="experienceInfo" sectionName="Experience" inpWthLbs={this.inpWthLbs3} />
              <br/>
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
        }
      </div>
    );
  }
}

export default App;
