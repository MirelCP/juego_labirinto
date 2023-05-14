let tcanvas = 500; // tamaño del canvas
let tamCelda = 50; // tamaño de la celda
let numCeldas = tcanvas / tamCelda; // tamaño del laberinto

let posX = 1; // posición en x
let posY = 1; // posición en y

let laberinto; // laberinto

let tiempoLimite; // Tiempo límite para completar el nivel
let tiempoRestante; // Tiempo restante para completar el nivel
let intervaloTiempo; // Identificador del intervalo de tiempo
let instrucciones = document.getElementById('instrucciones'); 
instrucciones.style.display = 'none'; 

function verIns() {
    if (instrucciones.style.display === 'none') {
        instrucciones.style.display = 'block';
    } else {
        instrucciones.style.display = 'none';
    }
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

}

function keyPressed() {
    if (laberinto[posY][posX] === 'F') {
        return; // Si ya llegó a la meta, no hacer nada
    }
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
    verificarVictoria(); // Verificar si el jugador ha llegado al final después de cada movimiento

    redraw();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verificarVictoria() {
    if (laberinto[posY][posX] === 'F') {
        clearInterval(intervaloTiempo); // Detener el contador de tiempo
        document.getElementById('maze-screen').classList.add('animate__animated', 'animate__bounceIn');
        document.getElementById('victory-message').style.display = 'block';
        
            confetti();

            await delay(3000); // Agregar un delay de 3 segundos
            document.getElementById('victory-message').style.display = 'none';
            
          
        await delay(2000); // Agregar un delay de 2 segundos
        reiniciarJuego();
    }
}




function cambiarNivel() {
    let nivelSeleccionado = document.getElementById("level").value;

    if (nivelSeleccionado === "facil") {
        laberinto = laberintoFacil;
        numCeldas = laberinto.length;
        tiempoLimite = 30; // 30 segundos para completar el nivel fácil
    } else if (nivelSeleccionado === "medio") {
        laberinto = laberintoMedio;
        numCeldas = laberinto.length;
        tiempoLimite = 60; // 60 segundos para completar el nivel medio
    } else if (nivelSeleccionado === "dificil") {
        laberinto = laberintoDificil;
        numCeldas = laberinto.length;
        tiempoLimite = 90; // 90 segundos para completar el nivel difícil
    }

    tamCelda = tcanvas / numCeldas;

    // Restablecer posición del jugador
    for (let i = 0; i < laberinto.length; i++) {
        for (let j = 0; j < laberinto[i].length; j++) {
            if (laberinto[i][j] === 'J') {
                posX = j;
                posY = i;
            }
        }
    }

    clear();
    resizeCanvas(tcanvas, tcanvas);
    mostrarTiempoRestante(); // Mostrar el tiempo restante inicial
    iniciarContadorTiempo(); // Iniciar el contador de tiempo
    redraw();  // Redibujar el laberinto con el nuevo nivel y tamaño
}


function mostrarTiempoRestante() {
    let timerElement = document.getElementById("timer");    
    timerElement.innerHTML = `Tiempo restante: ${tiempoRestante}s`;
}

function iniciarContadorTiempo() {
    // Limpiar el intervalo de tiempo anterior si existe
    if (intervaloTiempo) {
        clearInterval(intervaloTiempo);
    }

    tiempoRestante = tiempoLimite;
    mostrarTiempoRestante();

    intervaloTiempo = setInterval(() => {
        tiempoRestante--;
        mostrarTiempoRestante();

        if (tiempoRestante <= 0) {
            clearInterval(intervaloTiempo);
            document.getElementById('timeout-message').style.display = 'block';
            setTimeout(reiniciarJuego, 5000); 
        }
        
    }, 1000);
}




function empezarJuego() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('level-screen').style.display = 'block';
    let level = document.getElementById("level");
    let mensajeTie = document.getElementById("mensajeTie"); 

    level.addEventListener("change", () => {
        switch(level.value) {
            case "facil":
                mensajeTie.innerHTML = "Este nivel se debe completar en 30 segundos";
                break;
            case "medio":
                mensajeTie.innerHTML = "Este nivel se debe completar en 60 segundos";
                break;
            case "dificil":
                mensajeTie.innerHTML = "Este nivel se debe completar en 90 segundos";
                break;
        }
    });
}


function empezarLaberinto() {
    document.getElementById('level-screen').style.display = 'none';
    document.getElementById('maze-screen').style.display = 'block';
    cambiarNivel(); // Esta función ya la tienes definida
    loop(); // Esta función comienza el loop de p5.js para que draw() se llame continuamente
    verificarVictoria(); // Verificar si el jugador ha llegado al final al inicio del juego
}





function reiniciarJuego() {
    document.getElementById('maze-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'block';
    document.getElementById('timeout-message').style.display = 'none';
    clear();
    setup();
}
