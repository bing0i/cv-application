import { useState } from 'react'
import '../styles/SectionOfForm.css'

const SectionOfForm = (props) => {
  const { 
    sectionName, 
    inpWthLbs, 
    info,
    sendInfo,
  } = props;

  let initialInpValues = [];
  if (info) {
    initialInpValues = info;
  }

  const [inpValues, setInpValues] = useState(initialInpValues);

  const handleInputChange = (e, index) => {
    let newInpValues = inpValues.slice();
    newInpValues[index] = e.target.value;
    setInpValues(newInpValues);
    sendInfo(newInpValues);
  };

  return (
    <div>
      <section className="sect">
        <h1 className="sectionName">{sectionName}</h1>
        {
          inpWthLbs.map((inpWthLb, index) => {
            return (
              <div className="inpWthLb" key={index}>
                <label htmlFor={index}>{inpWthLb.lbText}</label>
                <br/>
                <input
                  id={index}
                  className="inp"
                  type={inpWthLb.inpType}
                  value={inpValues[index]} 
                  onChange={(e) => {handleInputChange(e, index)}}
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

export default SectionOfForm;