import React, { Component } from 'react';
import img1 from '../assets/img/angery.png';
import img2 from '../assets/img/black_guy_confused.png';
import img3 from '../assets/img/crying_peter.jpg';
import img4 from '../assets/img/cute.gif';
import img5 from '../assets/img/demonetized.png';
import img6 from '../assets/img/heart.jpg';
import img7 from '../assets/img/kawaiiface.png';
import img8 from '../assets/img/kawaii.gif';
import handleViewport from 'react-in-viewport';

class Comic extends Component {


    render() {

        const Block = (props: { inViewport: boolean }) => {
            const { inViewport, innerRef } = props;
            return (
              <div className="viewport-block" ref={innerRef}>
                <img src={img5} alt="" /><br /> 
              </div>
            );
          };

          const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
 

        return (
            <div>
                <h1>SCROLL TO THE BOTTOM!</h1>
                <img src={img1} alt="" /> <br />
                <img src={img2} alt="" /><br />
                <img src={img3} alt="" /><br />
                <img src={img4} alt="" /><br />
                <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
                <img src={img6} alt="" /><br />
                <img src={img7} alt="" /><br />
                <img src={img8} alt="" /><br />
            </div>
        );
    }
}

export default Comic;