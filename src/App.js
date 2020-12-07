import { Component } from 'react';
import LeftContentCV from './components/LeftContentCV';
import RightContentCV from './components/RightContentCV';
import SectionOfForm from './components/SectionOfForm';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.contactInputWithLabels = [
      {lbText: 'Name', inpType: 'text'}, 
      {lbText: 'Email', inpType: 'email'},
      {lbText: 'Phone number', inpType: 'tel'},
      {lbText: 'Address', inpType: 'text'},
      {lbText: 'LinkedIn', inpType: 'url'},
      {lbText: 'Github', inpType: 'url'},
      {lbText: 'Facebook', inpType: 'text'},
      {lbText: 'Profile', inpType: 'text'},
    ];

    this.educationInputWithLabels = [
      {lbText: 'School name', inpType: 'text'}, 
      {lbText: 'Title of study', inpType: 'text'},
      {lbText: 'Date of graduation', inpType: 'date'},
    ];

    this.experienceInputWithLabels = [
      {lbText: 'Company name', inpType: 'text'}, 
      {lbText: 'Position title', inpType: 'text'},
      {lbText: 'Main tasks', inpType: 'text'},
      {lbText: 'From', inpType: 'date'},
      {lbText: 'To', inpType: 'date'},
    ];

    this.skillsInputWithLabels = [
      {lbText: 'Skill', inpType: 'text'}, 
      {lbText: 'Skill', inpType: 'text'},
      {lbText: 'Skill', inpType: 'text'},
      {lbText: 'Skill', inpType: 'text'},
      {lbText: 'Skill', inpType: 'text'},
    ];

    this.languagesInputWithLabels = [
      {lbText: 'Language', inpType: 'text'}, 
      {lbText: 'Language', inpType: 'text'},
      {lbText: 'Language', inpType: 'text'},
    ];

    this.state = {
      isSubmitted: true,
      contactInfo: [
        'Courgette',
        'courgett3@gmail.com',
        '+1 000 000 0000',
        'Street, City',
        'https://www.linkedin.com/',
        'https://github.com/bing0i',
        'https://www.facebook.com/',
        `Xxx xxxxxx xx x xx  
        xxxx x xxxxxx x xxxxxxx 
        xx xxx x x xx xxx xxx 
        xx xx xxxx x x x xxx x 
        xxx x xx x xx x xx 
        xxxxxxxxx x xxx xxx 
        xx xxxxxxxxxx xxxxx xx`,
      ],
      educationInfo: [
        'University of Science',
        'Bachelor of Computer Science',
        '1111-11-21',
      ],
      experienceInfo: [
        'Xxxxxx xxx x xxxx xxxx xxxx xxxxx x xxxxxxx x xxx x',
        'Xxxx x xxxxx x x xxxxxx xxxx xxx xxxx xx xxxx x',
        'Xxx xxxx xxx xx xx xx xx xx x xxx x xx x xx xxx xx xx xx xxx x',
        '1111-11-21',
        '1111-11-21',
      ],
      skillsInfo: [
        'Xxx xx xxxxx x xxx xxxx x xxxx x xxx x x',
        'Xxxxxxxxxxxxxx x xxx x xxxxxxx xxx x xx xxxx xx',
        'X xxx x xxx xx xx xxxxxx xxx x xxx xx xxxxxxx',
        'Xxxx xx xx xxxxx xxxx xxx x xxxxx xxx xxx xxxxx',
        'Xxxxxx xxx xx xxx xxxxx x x xxxxxxx xx xxxx',
      ],
      languagesInfo: [
        'English',
        'Vietnamese',
        'Null',
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getContactInfo = this.getContactInfo.bind(this);
    this.getEducationInfo = this.getEducationInfo.bind(this);
    this.getExperienceInfo = this.getExperienceInfo.bind(this);
    this.getSkillsInfo = this.getSkillsInfo.bind(this);
    this.getLanguagesInfo = this.getLanguagesInfo.bind(this);
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

  getSkillsInfo(info) {
    this.setState({skillsInfo: info});
  }

  getLanguagesInfo(info) {
    this.setState({languagesInfo: info});
  }

  render() {
    const {
      contactInfo,
      educationInfo,
      experienceInfo,
      skillsInfo,
      languagesInfo,
    } = this.state;

    return (
      <div className="App">
        {
          this.state.isSubmitted 
          ? <div className="cv">
              <LeftContentCV contactInfo={contactInfo} />
              <RightContentCV 
                educationInfo={educationInfo} 
                experienceInfo={experienceInfo} 
                skillsInfo={skillsInfo} 
                languagesInfo={languagesInfo}
              />
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          : <form className="form">
              <SectionOfForm 
                className="contactInfo" 
                sectionName="Contact" 
                inpWthLbs={this.contactInputWithLabels} 
                info={contactInfo} 
                sendInfo={this.getContactInfo} 
              />
              <SectionOfForm 
                className="educationInfo" 
                sectionName="Education" 
                inpWthLbs={this.educationInputWithLabels} 
                info={educationInfo} 
                sendInfo={this.getEducationInfo} 
              />
              <SectionOfForm 
                className="experienceInfo" 
                sectionName="Experience" 
                inpWthLbs={this.experienceInputWithLabels} 
                info={experienceInfo} 
                sendInfo={this.getExperienceInfo} 
              />
              <SectionOfForm 
                className="skillsInfo" 
                sectionName="Skills" 
                inpWthLbs={this.skillsInputWithLabels} 
                info={skillsInfo} 
                sendInfo={this.getSkillsInfo} 
              />
              <SectionOfForm 
                className="languagesInfo" 
                sectionName="Languages" 
                inpWthLbs={this.languagesInputWithLabels} 
                info={languagesInfo} 
                sendInfo={this.getLanguagesInfo} 
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
        }
      </div>
    );
  }
}

export default App;
