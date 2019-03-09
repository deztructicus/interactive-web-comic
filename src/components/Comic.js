import React, { Component } from 'react';
import img1 from '../assets/img/angery.png';
import img2 from '../assets/img/black_guy_confused.png';
import img3 from '../assets/img/crying_peter.jpg';
import img4 from '../assets/img/cute.gif';
import img5 from '../assets/img/demonetized.png';
import img6 from '../assets/img/heart.jpg';
import img7 from '../assets/img/kawaiiface.png';
import img8 from '../assets/img/kawaii.gif';
import sonicsfx from '../assets/sfx/sonic.mp3'
import handleViewport from 'react-in-viewport';
import Sound from 'react-sound';
import ReactHowler from 'react-howler'

class Comic extends Component {


    constructor(props) {
        super(props)

        this.state = {
            playing: false
        }
    }
    render() {

        const Block = (props) => {
            const { inViewport, innerRef } = props;
            return (

                <div className="viewport-block" ref={innerRef}>
                    <Sound
                        url={sonicsfx}
                        playStatus={inViewport? Sound.status.PLAYING : Sound.status.STOPPED}
                        autoLoad={true}
                    />
                    <img src={img5} alt="" /><br />
                </div>
            );
        };

        const Block2 = (props) => {
            const { inViewport, innerRef } = props;
            return (

                <div className="viewport-block" ref={innerRef}>
                    <Sound
                        url="https://www.myinstants.com/media/sounds/nyaa_bOntpK5.mp3"
                        playStatus={inViewport? Sound.status.PLAYING : Sound.status.STOPPED}
                        autoLoad={true}
                    />
                    <img src={img8} alt="" /><br />
                </div>
            );
        };

        const ViewportBlock = handleViewport(Block);
        const ViewportBlock2 = handleViewport(Block2);


        return (
            <div>
                <h1>SCROLL TO THE BOTTOM!</h1>
                <img src={img1} alt="" /> <br />
                <img src={img2} alt="" /><br />
                <img src={img3} alt="" /><br />
                <img src={img4} alt="" /><br />

                {/* this.setState({playing:Sound.status.STOPPED});  */}
                {/* this.setState({playing:Sound.status.PLAYING}); */}
                <ViewportBlock onEnterViewport={() => { console.log('enter'); }} onLeaveViewport={() => { console.log('exit'); }} />
                <img src={img6} alt="" /><br />
                <img src={img7} alt="" /><br />


                <ViewportBlock2 onEnterViewport={() => { console.log('enter'); }} onLeaveViewport={() => { console.log('exit'); }} />
            </div>
        );
    }
}

export default Comic;