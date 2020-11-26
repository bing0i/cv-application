import { Component } from 'react'
import InputWithLabel from './InputWithLabel';
import uniqid from 'uniqid';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inpWthLbs, id } = this.props;

    return (
      <section id={id} className="sect"> {
          inpWthLbs.map((inpWthLb) => {
            return (<InputWithLabel
                      key={uniqid()}
                      lbText={inpWthLb.lbText}
                      inpType={inpWthLb.inpType} 
                    />);
          })
        }
      </section>
    );
  }
}

export default Section;