
import React, { Component } from "react";
import Sketch from 'react-p5';
import P5Canvas from "./P5Canvas";

export default class App extends Component {
	y =1;
	direction = '^';


				
	setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef); 
	p5.background(230,140,150);
	p5.ellipse((p5.random(150),p5.random(300),3,3))   
	
	// use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
					draw=p5 => {
						
						p5.background(p5.random(this.y-50),7,p5.random(this.y-100),this.y);
						p5.fill(255, this.y * 1.3, 0);
						p5.ellipse(p5.width / 2, this.y, 50);
						if (this.y > p5.height) this.direction = '';
						if (this.y < 0) {
							this.direction = '^';
						}
						if (this.direction === '^') this.y += 8;
						else this.y -= 4;
						p5.textSize(25)
						p5.text("KAMVAS", 180,200)
					}  
				
					render() {
						return <Sketch setup={this.setup} draw={this.draw} />;
					}
	
				
				};
				
				
					