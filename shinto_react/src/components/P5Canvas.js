import React, { Component } from 'react';
import p5 from 'p5';

class P5Canvas extends Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    sketch = p => {
      p.newImage = null;
      p.x = 0;
      p.y = 0;
  
      p.setup = () => {
        this.can = p.createCanvas(600, 600);
        p.background(0);
        this.clear = p.createButton("clear");
        this.clear.mousePressed(() => p.background(0));
        this.can.drop(p.gotFile);
      };
  
      p.draw = () => {
        if (p.mouseIsPressed) {
          p.stroke(255);
          p.strokeWeight(10);
          p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
  
        if (p.newImage) {
          p.image(
            p.newImage,
            this.x - p.newImage.width * 0.2,
            this.y - p.newImage.height * 0.2,
            p.newImage.width * 0.5,
            p.newImage.height * 0.5
            
          );
        }
      };
  
      p.gotFile = file => {
        console.log(file);
  
        this.x = p.mouseX;
        this.y = p.mouseY;
  
        switch (file.type) {
          case "audio":
            console.log("this is an audio file");
            break;
          case "image":
            p.newImage = p.createImg(file.data, "").hide();
            break;
  
          default:
            console.log("I dont know what this file is?");
            break;
        }
      };
  
      // we attach our own function to our P5 instance 'p'
      p.myClear = () => {
        p.background(155);
      };
    };
  
    componentDidMount() {
      this.myP5 = new p5(this.sketch, this.canvasRef.current);
      this.testX = 5555;
    }
  
    render() {
      return (
        <>
          <div ref={this.canvasRef} style={{marginTop: "90px", marginBottom: "90px", marginLeft: "290px" }}></div>
        </>
      );
    }
  }
  
  export default P5Canvas;