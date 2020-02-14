class Noms {
    constructor() {
        this.x = 0
        this.y = 0
    }

    newRandomNom = () => {
        let cols = floor(width / scl)
        let rows = floor(height / scl)
        this.x = floor(random(cols)) * scl
        this.y = floor(random(rows)) * scl
    }
    nom = () => {
        fill("pink")
        rect(this.x, this.y, scl, scl)
    }

}