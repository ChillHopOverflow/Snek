let s
const scl = 20
let noms

function setup() {
    createCanvas(600, 600)
    s = new Snek()
    noms = new Noms()
    noms.newRandomNom()
    frameRate(9)
}
function draw() {
    background(51)
    if (s.eat(noms)) {
        noms.newRandomNom()
    }
    s.update()
    s.show()
    s.death()
    noms.nom()
}
function keyPressed() {
    if (key == 'w' || key == "ArrowUp") {
        s.dir(0, -1);
    } else if (key == 's' || key == "ArrowDown") {
        s.dir(0, 1);
    } else if (key == 'd' || key == "ArrowRight") {
        s.dir(1, 0);
    } else if (key == 'a' || key == "ArrowLeft") {
        s.dir(-1, 0);
    } else if (key == 'g') {
        s.total++
    }
}

