import React, { Component } from "react";
import Sketch from "react-p5";
 
export default class App extends Component {
  
 
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef); 
    p5.background(230,140,150);// use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = p5 => {
   
    p5.strokeWeight(p5.random(0.5));
    p5.fill((p5.random(100),p5.random(50),p5.random(150)));
    p5.line(p5.random(400),p5.random(300),p5.random(300), p5.height);
    p5.fill(p5.random(100,250), p5.random(50,130),p5.random(100,200),p5.random)
	p5.ellipse(p5.random(100,200),p5.random(100,200),7,7);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    
  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}