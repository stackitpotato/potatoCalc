function butter() {
    //bottom of the stack (first item selected)
    let bottom = game.potatoStack[0]

    if (bottom == 'butter') {
        game.score += 4
        document.querySelector('.score').textContent = 'Score: ' + game.score
    }
}

function calculateScore() {
    butter()
}
    