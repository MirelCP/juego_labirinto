let tcanvas = 500; // tamano del canvas
let tamCelda = 50; // tamano de la celda
let numCeldas = tcanvas / tamCelda; // tamano del laberinto

let posX = 1; // posicion en x
let posY = 1; // posicion en y

let laberinto; // laberinto

function setup() {
  createCanvas(tcanvas, tcanvas);
  noFill();


}


  let laberintoFacil = [
    
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 'J', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 'F', 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0,0 ]
  ];
   laberinto = laberintoFacil;

let laberintoMedio = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 'J', 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 'F']
  ];


  let laberintoDificil = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 'J', 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 'F'],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    
];


  
  
function draw() {
  background(220);

  // Dibujar laberinto
  for (let i = 0; i < numCeldas-1; i += 1) {
    for (let j = 0; j < numCeldas-1; j += 1) {
      if (laberinto[i][j] == 0) {
        fill(0);
        rect(i * tamCelda-1, j * tamCelda-1, tamCelda-1, tamCelda-1);
      } else if (laberinto[i][j] == 'F') {
        fill(0, 0, 255);
        rect(i * tamCelda-1, j * tamCelda-1, tamCelda-1, tamCelda-1);
      }
    }
  }

  // Dibujar jugador
  fill(0, 255, 0);
  rect(posX * tamCelda, posY * tamCelda, tamCelda, tamCelda);
}

function keyPressed() {
    if (keyCode == UP_ARROW && posY > 0) {
        if (laberinto[posX][posY - 1] == 1 || laberinto[posX][posY - 1] == 'F') {
          posY -= 1;
        }
      }
      if (keyCode == DOWN_ARROW && posY < numCeldas - 1) {
        if (laberinto[posX][posY + 1] == 1 || laberinto[posX][posY + 1] == 'F') {
          posY += 1;
        }
      }
      if (keyCode == LEFT_ARROW && posX > 0) {
        if (laberinto[posX - 1][posY] == 1 || laberinto[posX - 1][posY] == 'F') {
          posX -= 1;
        }
      }
      if (keyCode == RIGHT_ARROW && posX < numCeldas - 1) {
        if (laberinto[posX + 1][posY] == 1 || laberinto[posX + 1][posY] == 'F') {
          posX += 1;
        }
      }
    }
    
        // Cambiar nivel
    function cambiarNivel() {
        let nivelSeleccionado = document.getElementById("nivel").value;
      
        if (nivelSeleccionado === "facil") {
          laberinto = laberintoFacil;
        } else if (nivelSeleccionado === "medio") {
          laberinto = laberintoMedio;
        } else if (nivelSeleccionado === "dificil") {
          laberinto = laberintoDificil;
        }
      
        // Restablecer posición del jugador
        for (let i = 0; i < laberinto.length; i++) {
          for (let j = 0; j < laberinto[i].length; j++) {
            if (laberinto[i][j] === 'J') {
              posX = i;
              posY = j;
            }
          }
        }
      
        numCeldas = laberinto.length;
        tcanvas = numCeldas * tamCelda;
        resizeCanvas(tcanvas, tcanvas);
      }