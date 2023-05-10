

let tcanvas = 500; // tamano del canvas
let tamCelda = 50; // tamano de la celda
let numCeldas = tcanvas / tamCelda; // tamano del laberinto

let posX = 0; // posicion en x
let posY = 0; // posicion en y

let laberinto; // laberinto


    // Pintar el laberinto
      function setup(){
        createCanvas( tcanvas, tcanvas );
        noStroke();

        // crear laberinto
        laberinto = [];
        for( let i = 0; i < numCeldas; i++ ){
            laberinto[i] = [];
            for( let j = 0; j < numCeldas; j++ ){
                laberinto[i][j] = 1;
            }
        }
        
        //console.table( laberinto );

        //definir el laberinto, va a pasar por las celdas pares
       
        for( let i = 0; i < numCeldas; i++ ){
            for( let j = 0; j < numCeldas; j++ ){
                if( i % 2 == 0 || j % 2 == 0 ){
                    laberinto[i][j] = 0;
                }
            }
        }

      }

      function draw(){
        background( 220 );

        // dibujar laberinto
        for( let i = 0; i < numCeldas; i++ ){
            for( let j = 0; j < numCeldas; j++ ){
                if( laberinto[i][j] == 0 ){
                    fill( 255 );
                }else if ( laberinto[i][j] == 1 ){
                    fill( 0 );
                }
                rect( i*tamCelda, j*tamCelda, tamCelda, tamCelda );
            }
        }




        //dibujar jugador
        fill( 0, 255, 0 );
        rect( posX*tamCelda, posY*tamCelda, tamCelda, tamCelda );

      }

        function keyPressed(){
            if( keyCode == UP_ARROW && posY > 0 ){

                if( laberinto[posX][posY-1] == 0 ){
                    posY -= 1;
                }
            }
            if( keyCode == DOWN_ARROW && posY < numCeldas-1){

                if( laberinto[posX][posY+1] == 0 ){
                    posY += 1;
                }
               
            }
            if( keyCode == LEFT_ARROW && posX > 0){

                if( laberinto[posX-1][posY] == 0 ){
                    posX -= 1;
                }
            }
            if( keyCode == RIGHT_ARROW && posX < numCeldas-1){

                if( laberinto[posX+1][posY] == 0 ){
                    posX += 1;
                }
            }
            }