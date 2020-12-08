import { useState } from 'react';
import LeftContentCV from './components/LeftContentCV';
import RightContentCV from './components/RightContentCV';
import SectionOfForm from './components/SectionOfForm';
import './styles/App.css';

const App = () => {
  let contactInputWithLabels = [
    {lbText: 'Name', inpType: 'text'}, 
    {lbText: 'Email', inpType: 'email'},
    {lbText: 'Phone number', inpType: 'tel'},
    {lbText: 'Address', inpType: 'text'},
    {lbText: 'LinkedIn', inpType: 'url'},
    {lbText: 'Github', inpType: 'url'},
    {lbText: 'Facebook', inpType: 'text'},
    {lbText: 'Profile', inpType: 'text'},
  ];
  let educationInputWithLabels = [
    {lbText: 'School name', inpType: 'text'}, 
    {lbText: 'Title of study', inpType: 'text'},
    {lbText: 'Date of graduation', inpType: 'date'},
  ];
  let experienceInputWithLabels = [
    {lbText: 'Company name', inpType: 'text'}, 
    {lbText: 'Position title', inpType: 'text'},
    {lbText: 'Main tasks', inpType: 'text'},
    {lbText: 'From', inpType: 'date'},
    {lbText: 'To', inpType: 'date'},
  ];
  let skillsInputWithLabels = [
    {lbText: 'Skill', inpType: 'text'}, 
    {lbText: 'Skill', inpType: 'text'},
    {lbText: 'Skill', inpType: 'text'},
    {lbText: 'Skill', inpType: 'text'},
    {lbText: 'Skill', inpType: 'text'},
  ];
  let languagesInputWithLabels = [
    {lbText: 'Language', inpType: 'text'}, 
    {lbText: 'Language', inpType: 'text'},
    {lbText: 'Language', inpType: 'text'},
  ];

  const [isSubmitted, setIsSubmitted] = useState(true);
  const [contactInfo, setContactInfo] = useState([
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
  ]);
  const [educationInfo, setEducationInfo] = useState([
    'University of Science',
    'Bachelor of Computer Science',
    '1111-11-21',
  ]);
  const [experienceInfo, setExperienceInfo] = useState([
    'Xxxxxx xxx x xxxx xxxx xxxx xxxxx x xxxxxxx x xxx x',
    'Xxxx x xxxxx x x xxxxxx xxxx xxx xxxx xx xxxx x',
    'Xxx xxxx xxx xx xx xx xx xx x xxx x xx x xx xxx xx xx xx xxx x',
    '1111-11-21',
    '1111-11-21',
  ]);
  const [skillsInfo, setSkillsInfo] = useState([
    'Xxx xx xxxxx x xxx xxxx x xxxx x xxx x x',
    'Xxxxxxxxxxxxxx x xxx x xxxxxxx xxx x xx xxxx xx',
    'X xxx x xxx xx xx xxxxxx xxx x xxx xx xxxxxxx',
    'Xxxx xx xx xxxxx xxxx xxx x xxxxx xxx xxx xxxxx',
    'Xxxxxx xxx xx xxx xxxxx x x xxxxxxx xx xxxx',
  ]);
  const [languagesInfo, setLanguagesInfo] = useState([
    'English',
    'Vietnamese',
    'Null',
  ]);

  return (
    <div className="App">
      {
        isSubmitted 
        ? <div className="cv">
            <LeftContentCV contactInfo={contactInfo} />
            <RightContentCV 
              educationInfo={educationInfo} 
              experienceInfo={experienceInfo} 
              skillsInfo={skillsInfo} 
              languagesInfo={languagesInfo}
            />
            <button onClick={() => setIsSubmitted(!isSubmitted)}>Edit</button>
          </div>
        : <form className="form">
            <SectionOfForm 
              className="contactInfo" 
              sectionName="Contact" 
              inpWthLbs={contactInputWithLabels} 
              info={contactInfo} 
              sendInfo={setContactInfo} 
            />
            <SectionOfForm 
              className="educationInfo" 
              sectionName="Education" 
              inpWthLbs={educationInputWithLabels} 
              info={educationInfo} 
              sendInfo={setEducationInfo} 
            />
            <SectionOfForm 
              className="experienceInfo" 
              sectionName="Experience" 
              inpWthLbs={experienceInputWithLabels} 
              info={experienceInfo} 
              sendInfo={setExperienceInfo} 
            />
            <SectionOfForm 
              className="skillsInfo" 
              sectionName="Skills" 
              inpWthLbs={skillsInputWithLabels} 
              info={skillsInfo} 
              sendInfo={setSkillsInfo} 
            />
            <SectionOfForm 
              className="languagesInfo" 
              sectionName="Languages" 
              inpWthLbs={languagesInputWithLabels} 
              info={languagesInfo} 
              sendInfo={setLanguagesInfo} 
            />
            <button onClick={() => setIsSubmitted(!isSubmitted)}>Submit</button>
          </form>
      }
    </div>
  );
}

export default App;
