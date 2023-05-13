let tcanvas = 500; // tamaño del canvas
let tamCelda = 50; // tamaño de la celda
let numCeldas = tcanvas / tamCelda; // tamaño del laberinto

let posX = 1; // posición en x
let posY = 1; // posición en y

let laberinto; // laberinto




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
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
];


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
    for (let i = 0; i < laberinto.length; i++) {
        for (let j = 0; j < laberinto[i].length; j++) {
            if (laberinto[i][j] == 0) {
                fill(0);
                rect(j * tamCelda, i * tamCelda, tamCelda, tamCelda);
            } else if (laberinto[i][j] == 'F') {
                fill(0, 0, 255);
                rect(j * tamCelda, i * tamCelda, tamCelda, tamCelda);
            }
        }
    }

    // Dibujar jugador
    fill(0, 255, 0);
    rect(posX * tamCelda, posY * tamCelda, tamCelda, tamCelda);
}



function setup() {
    let cnv = createCanvas(tcanvas, tcanvas);
    cnv.parent('miCanvas');
    noFill();
    noLoop();

    // Establece el laberinto por defecto (puedes escoger cualquiera)
    laberinto = laberintoFacil;
}

function keyPressed() {
    if (keyCode == UP_ARROW && posY > 0) {
        if (laberinto[posY - 1][posX] == 1 || laberinto[posY - 1][posX] == 'F') {
            posY -= 1;
        }
    }
    if (keyCode == DOWN_ARROW && posY < laberinto.length - 1) {
        if (laberinto[posY + 1][posX] == 1 || laberinto[posY + 1][posX] == 'F') {
            posY += 1;
        }
    }
    if (keyCode == LEFT_ARROW && posX > 0) {
        if (laberinto[posY][posX - 1] == 1 || laberinto[posY][posX - 1] == 'F') {
            posX -= 1;
        }
    }
    if (keyCode == RIGHT_ARROW && posX < laberinto[0].length - 1) {
        if (laberinto[posY][posX + 1] == 1 || laberinto[posY][posX + 1] == 'F') {
            posX += 1;
        }
    }
    redraw();
}



function cambiarNivel() {
    let nivelSeleccionado = document.getElementById("level").value;

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
                posX = j;  
                posY = i;
            }
        }
    }

    numCeldas = laberinto.length;
    tamCelda = tcanvas / numCeldas;
    clear();
    resizeCanvas(tcanvas, tcanvas);
    redraw();  // Redibujar el laberinto con el nuevo nivel
}



function empezarJuego() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('level-screen').style.display = 'block';
}

function empezarLaberinto() {
    document.getElementById('level-screen').style.display = 'none';
    document.getElementById('maze-screen').style.display = 'block';
}

function empezarLaberinto() {
    document.getElementById('level-screen').style.display = 'none';
    document.getElementById('maze-screen').style.display = 'block';
    loop();
}

function reiniciarJuego() {
    document.getElementById('maze-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'block';
    clear();
    setup();
}
