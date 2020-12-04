import { Component } from 'react'
import InputWithLabel from './InputWithLabel';
import uniqid from 'uniqid';
import '../styles/Section.css'

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sectionName, inpWthLbs, id } = this.props;

    return (
      <div>
        <section id={id} className="sect">
          <h1>{sectionName}</h1>
          {
            inpWthLbs.map((inpWthLb) => {
              return (<InputWithLabel
                        key={uniqid()}
                        lbText={inpWthLb.lbText}
                        inpType={inpWthLb.inpType} 
                      />);
            })
          }
        </section>
      </div>
    );
  }
}

export default Section;