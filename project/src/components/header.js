import React, { Component } from "react";
import AU8A0624 from "../images/AU8A0624.JPG";
import Typist from "react-typist";
import 'react-typist/dist/Typist.css';

class Header extends Component {
  

    state = {
      renderMsg: false,
    }
  
    onHeaderTyped = () => {
      this.setState({ renderMsg: true });
    }
  
    render()
    {return (
      <div>
        <h3 className="title">Software Engineer | Advertising Technology</h3>
        <img src={AU8A0624} className="hero" alt='hero' />

        <h5>Hello, I'm</h5>
        <Typist
          className="type-name"
          // avgTypingDelay={75}
          stdTypingDelay={75}
          delay={75}

          startDelay={1000}
          onTypingDone={this.onHeaderTyped}

        >
          <span className='ash'>ashik<Typist.Backspace count={2} delay={1000} /> rahman.</span>
        </Typist>    </div>
    );}
  };


export default Header;
