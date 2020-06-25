import React from 'react'
import Radium from 'radium'
// Print 1
import p1 from '../print3/p1.jpg'
import p2 from '../print3/p2.jpg'
import p3 from '../print3/p3.jpg'
import p4 from '../print3/p4.jpg'
import p5 from '../print3/p5.jpg'
import p6 from '../print3/p6.jpg'
import p7 from '../print3/p7.jpg'
import p8 from '../print3/p8.jpg'
import p9 from '../print3/p9.jpg'
import p10 from '../print3/p10.jpg'
import p11 from '../print3/p11.jpg'
import p12 from '../print3/p12.jpg'
import p13 from '../print3/p13.jpg'
import p14 from '../print3/p14.jpg'
import p15 from '../print3/p15.jpg'
import p16 from '../print3/p16.jpg'
import p17 from '../print3/p17.jpg'
import p18 from '../print3/p18.jpg'
import p19 from '../print3/p19.jpg'
import p20 from '../print3/p20.jpg'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: 'black'
  },
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };

    this.pageDiv = React.createRef(); 
  }

  render() {
    return (
      <div ref={this.pageDiv} style={styles.container}>
        <img src={p1} alt={"p1"} />
        <img src={p2} alt={"p2"} />
        <img src={p3} alt={"p3"} />
        <img src={p4} alt={"p4"} />
        <img src={p5} alt={"p5"} />
        <img src={p6} alt={"p6"} />
        <img src={p7} alt={"p7"} />
        <img src={p8} alt={"p8"} />
        <img src={p9} alt={"p9"} />
        <img src={p10} alt={"p10"} />
        <img src={p11} alt={"p11"} />
        <img src={p12} alt={"p12"} />
        <img src={p13} alt={"p13"} />
        <img src={p14} alt={"p14"} />
        <img src={p15} alt={"p15"} />
        <img src={p16} alt={"p16"} />
        <img src={p17} alt={"p17"} />
        <img src={p18} alt={"p18"} />
        <img src={p19} alt={"p19"} />
        <img src={p20} alt={"p20"} />
      </div>
    );
  }

  componentDidMount() {
    // Create a timeout for 2 seconds before scrolling
    setTimeout(() => {
      let divHeight = parseInt(this.pageDiv.current.clientHeight); 
      console.log(divHeight);
      window.scrollTo({
        top: divHeight,
        behavior: 'smooth'
      });
    }, 500);
  }


}

export default Radium(Page);
