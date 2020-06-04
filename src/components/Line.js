import React from 'react'
import Radium from 'radium'
// Print 1
import p1 from '../print1/p1.jpg'
import p2 from '../print1/p2.jpg'
import p3 from '../print1/p3.jpg'
import p4 from '../print1/p4.jpg'
import p5 from '../print1/p5.jpg'
import p6 from '../print1/p6.jpg'

// Print 2
import pA from '../print2/p1.jpg'
import pB from '../print2/p2.jpg'
import pC from '../print2/p3.jpg'
import pD from '../print2/p4.jpg'
import pE from '../print2/p5.jpg'
import pF from '../print2/p6.jpg'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '200vh',
    justifyContent: 'space-between'
  },
  
  leftPrint: {
    display: 'flex',
    flexDirection: 'column',
    height: '200%',
    width: '49.5%'
  },

  rightPrint: {
    display: 'flex',
    flexDirection: 'column',
    height: '200%',
    width: '49.5%'
  }
};

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    return (
      <div style={styles.container}>
          <div style={styles.leftPrint}>
            <img src={p1} alt={"p1"} />
            <img src={p2} alt={"p2"} />
            <img src={p3} alt={"p3"} />
            <img src={p4} alt={"p4"} />
            <img src={p5} alt={"p5"} />
            <img src={p6} alt={"p6"} />
          </div>
          <div style={styles.rightPrint}>
            <img src={pA} alt={"pA"} />
            <img src={pB} alt={"pB"} />
            <img src={pC} alt={"pC"} />
            <img src={pD} alt={"pD"} />
            <img src={pE} alt={"pE"} />
            <img src={pF} alt={"pF"} />
          </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo({
      top: 4000,
      behavior: 'smooth'
    });
  }
}

export default Radium(Line);
