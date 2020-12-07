import { Component } from 'react';
import experienceImg from '../images/suitcase.png';
import educationImg from '../images/mortarboard.png';
import skillsImg from '../images/design-tools.png';
import languagesImg from '../images/translate.png';
import '../styles/RightContent.css';
import uniqid from 'uniqid';

class RightContentCV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      educationInfo, 
      experienceInfo,
      skillsInfo,
      languagesInfo,
    } = this.props;

    return (
      <div className="rightContent">
        <div className="boxRight">
          <h1 className="infoTitleRight">
            <img className="iconImg" alt="Education icon" src={educationImg} />
            &ensp;Education
          </h1>
          {educationInfo.map((info) => {
            return (
              <p key={uniqid()} className="infoRight">{info}</p>
            );
          })}
        </div>
       
        <div className="boxRight">
          <h1 className="infoTitleRight">
            <img className="iconImg" alt="Experience icon" src={experienceImg} />
            &ensp;Experience
          </h1>
          {experienceInfo.map((info) => {
            return (
              <p key={uniqid()} className="infoRight">{info}</p>
            );
          })}
        </div>

        <div className="boxRight">
          <h1 className="infoTitleRight">
            <img className="iconImg" alt="Skills icon" src={skillsImg} />
            &ensp;Skills
          </h1>
          {skillsInfo.map((info) => {
            return (
              <p key={uniqid()} className="infoRight">{info}</p>
            );
          })}
        </div>

        <div className="boxRight">
          <h1 className="infoTitleRight">
            <img className="iconImg" alt="Languages icon" src={languagesImg} />
            &ensp;Languages
          </h1>
          {languagesInfo.map((info) => {
            return (
              <p key={uniqid()} className="infoRight">{info}</p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RightContentCV;