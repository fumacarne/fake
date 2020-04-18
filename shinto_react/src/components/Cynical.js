import React, { Component } from 'react';
import p5 from 'p5';
class P5Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    function Agente( partenza ) {
        // Proprietà
          this.pos = partenza.copy();
        this.vel = p5.Vector.random2D();
        // Metodi
        this.display = function() {                            
            ellipse( this.pos.x,this.pos.y, 6 );
        };
          this.update = function() {                                     // ** MODIFICA METODO
            this.pos.add( this.vel );		
            if (this.pos.x<0 || this.pos.x>width ||
                            this.pos.y<0 || this.pos.y>height) {  // se esce da canvas...
                this.vel.mult( -1 );                  // inverte la direzione 
            }
            } 
    }
    
    
    // DATI GLOBALI ////////////////////////////////////////////////////////////////////////
    var agenti = [];      
    var agentiMax = 300;                                       // ** MODIFICA VALORI GLOBALI
    var centro;          
    
    
    // INIZIALIZZAZIONI ////////////////////////////////////////////////////////////////////
    function setup() {
        createCanvas(600, 600);
        centro = createVector(300,300, 50,);
         
          colorMode( HSL, 255 );                               // ** AGGIUNTA INIZIALIZZAZIONI
          for (var i=0;  i<agentiMax;  i++) {
            agenti[i] = new Agente( centro );
        }
          background(0);
    }
    
    
    // AGGIORNAMENTO DATI E DISEGNO FOTOGRAMMA /////////////////////////////////////////////
    function draw() {
          // Aggiorna valori 
          for (var i=0; i<agenti.length; ++i) {            // ** MODIFICA AGGIORNAMENTO VALORI  
            agenti[i].update();
        }
          // Operazioni di disegno
            blendMode(ADD);                         // ** AGGIUNTA ATTENUAZIONE CONTENUTO CANVAS
          background(255);
          blendMode(BLEND);
        for (var i=0; i<agenti.length-1; i+=2) {               // ** MODIFICA LOGICA DISEGNO
                  var pos1 = agenti[i].pos;
                  var pos2 = agenti[i+1].pos;
                  var c = map( i, 0,agenti.length, 0,128 );
                  
                  line( pos1.x,pos1.y, pos2.x,pos2.y );  // disegna linea fra due agenti 
            fill(200,200,20);
                  agenti[i].display();                   // disegna i due agenti
                  agenti[i+1].display();
        }
    
    }