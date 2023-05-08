

let tcanvas = 500; // tamano del canvas
let tamCelda = 50; // tamano de la celda
let numCeldas = tcanvas / tamCelda; // tamano del laberinto

let posX = 0; // posicion en x
let posY = 0; // posicion en y

let laberinto = []; // laberinto

      function setup(){
        createCanvas( tcanvas, tcanvas );
        noStroke();
      }

      function draw(){
        background( 220 );
        //dibujar jugador
        fill( 0, 255, 0 );
        rect( posX*tamCelda, posY*tamCelda, tamCelda, tamCelda );

      }

        function keyPressed(){
            if( keyCode == UP_ARROW && posY > 0 ){
                posY -= 1;
            }
            if( keyCode == DOWN_ARROW && posY < numCeldas-1){
                posY += 1;
            }
            if( keyCode == LEFT_ARROW && posX > 0){
                posX -= 1;
            }
            if( keyCode == RIGHT_ARROW && posX < numCeldas-1){
                posX += 1;
            }
            }