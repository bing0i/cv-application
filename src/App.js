import { Component } from 'react';
import Section from './components/Section';
import './styles/App.css';
import avatarImg from './images/woman.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.contactInputWithLabels = [
      {lbText: 'Name', inpType: 'text'}, 
      {lbText: 'Email', inpType: 'email'},
      {lbText: 'Phone number', inpType: 'tel'},
    ];

    this.educationInputWithLabels = [
      {lbText: 'School name', inpType: 'text'}, 
      {lbText: 'Title of study', inpType: 'text'},
      {lbText: 'Date of study', inpType: 'date'},
    ];

    this.experienceInputWithLabels = [
      {lbText: 'Company name', inpType: 'text'}, 
      {lbText: 'Position title', inpType: 'text'},
      {lbText: 'Main tasks', inpType: 'text'},
      {lbText: 'From', inpType: 'date'},
      {lbText: 'To', inpType: 'date'},
    ];

    this.state = {
      isSubmitted: true,
      contactInfo: [],
      educationInfo: [],
      experienceInfo: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getContactInfo = this.getContactInfo.bind(this);
    this.getEducationInfo = this.getEducationInfo.bind(this);
    this.getExperienceInfo = this.getExperienceInfo.bind(this);
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  handleEdit() {
    this.setState({isSubmitted: false});
  }

  getContactInfo(info) {
    this.setState({contactInfo: info});
  }

  getEducationInfo(info) {
    this.setState({educationInfo: info});
  }

  getExperienceInfo(info) {
    this.setState({experienceInfo: info});
  }

  render() {
    const {
      contactInfo,
      educationInfo,
      experienceInfo,
    } = this.state;

    return (
      <div className="App">
        {
          this.state.isSubmitted 
          ? <div className="cv">
              <div className="leftContent">
                <img id="avatar" alt="Avatar" src={avatarImg} />
                {contactInfo.map((info) => {
                  return (
                    <p>{info}</p>
                  );
                })}
              </div>
              <div className="rightContent">
                <h1 className="infoTitle">Education</h1>
                {educationInfo.map((info) => {
                  return (
                    <p>{info}</p>
                  );
                })}
                <h1 className="infoTitle">Experience</h1>
                {experienceInfo.map((info) => {
                  return (
                    <p>{info}</p>
                  );
                })}
              </div>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          : <form className="form">
              <Section 
                className="contactInfo" 
                sectionName="Contact" 
                inpWthLbs={this.contactInputWithLabels} 
                info={contactInfo} 
                sendInfo={this.getContactInfo} 
              />
              <Section 
                className="educationInfo" 
                sectionName="Education" 
                inpWthLbs={this.educationInputWithLabels} 
                info={educationInfo} 
                sendInfo={this.getEducationInfo} 
              />
              <Section 
                className="experienceInfo" 
                sectionName="Experience" 
                inpWthLbs={this.experienceInputWithLabels} 
                info={experienceInfo} 
                sendInfo={this.getExperienceInfo} 
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
        }
      </div>
    );
  }
}

export default App;
