let menuMode = true;
function menu() {
    if (menuMode) {
        background(200)
        text("CLICK THE SCREEN TO BEGIN", 50, 70)
        return false
    }
    return true
}


function mouseClicked() {
    menuMode = false
}