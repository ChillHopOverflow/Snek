let s
const scl = 20
let food

function setup() {
    createCanvas(600, 600)
    s = new Snek()
    frameRate(9)
    pickLocation()
}
function draw() {
    background(51)
    if (s.eat(food)) {
        pickLocation()
    }
    s.update()
    s.show()
    s.death()
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}
function pickLocation() {
    let cols = floor(width / scl)
    let rows = floor(height / scl)
    food = createVector(floor(random(cols)), floor(random(rows)))
    food.mult(scl)
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

