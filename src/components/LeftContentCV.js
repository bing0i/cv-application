import avatarImg from '../images/woman.png';
import facebookImg from '../images/facebook.png';
import linkedinImg from '../images/linkedin.png';
import githubImg from '../images/github.png';
import socialMediaImg from '../images/network.png';
import contactImg from '../images/contact.png';
import profileImg from '../images/personal-data.png';
import '../styles/LeftContent.css'

const LeftContentCV = (props) => {
  const { contactInfo } = props;
  return (
    <div className="leftContent">
      <div className="box">
        <img id="avatar" alt="Avatar" src={avatarImg} />
        <p id="name" className="info">{contactInfo[0]}</p>
      </div>

      <div className="box">
        <h1 className="infoTitle">
          <img className="iconImg" alt="Profile icon" src={profileImg} />
          &ensp;Profile
        </h1>
        <p className="info" id="profile">{contactInfo[7]}</p>
      </div>

      <div className="box">
        <h1 className="infoTitle">
          <img className="iconImg" alt="Social media icon" src={socialMediaImg} />
          &ensp;Social media
        </h1>
        <a className="info" href={contactInfo[4]} target="_blank">
          <img className="iconImg" alt="LinkedIn icon" src={linkedinImg} />
          &ensp;LinkedIn
        </a>
        <a className="info" href={contactInfo[5]} target="_blank">
          <img className="iconImg" alt="Github icon" src={githubImg} />
          &ensp;Github
        </a>
        <a className="info" href={contactInfo[6]} target="_blank">
          <img className="iconImg" alt="Facebook icon" src={facebookImg} />
          &ensp;Facebook
        </a>
      </div>

      <div className="box">
      <h1 className="infoTitle">
        <img className="iconImg" alt="Contact icon" src={contactImg} />
        &ensp;Contact
      </h1>
        <a className="info" href={"mailto:"+contactInfo[1]}>{contactInfo[1]}</a>
        <a className="info" href={"tel:"+contactInfo[2]}>{contactInfo[2]}</a>
        <p className="info">{contactInfo[3]}</p>
      </div>
    </div>
  );
}

export default LeftContentCV;