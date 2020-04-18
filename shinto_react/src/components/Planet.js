import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {


	setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef); 
		p5.background(230);
		p5.stroke(0,0,0,15);
		
		// use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = p5 => {
	
		function randomChord(){
			var angle1 = p5.random(0,2*p5.PI);
			var xpos1 = 150 + 150 * p5.cos(angle1);
			var ypos1 = 150 + 150 * p5.sin(angle1);
			var angle2= p5.random(0,2*p5.PI);
			var xpos2=150 + 150 * p5.cos(angle2);
			var ypos2 = 150 + 150 * p5.sin(angle2);
	
			p5.line(xpos1, ypos1, xpos2, ypos2);
	
	
			}

            randomChord();
            randomChord();


	
	}
    render() {
        return <Sketch setup={this.setup} draw={this.draw} />;
      }
    }