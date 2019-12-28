function updateScore() {
    document.querySelector('.score').textContent = 'Score: ' + game.score
}


function butter() {
    //bottom of the stack (first item selected)
    let bottom = game.potatoStack[0]

    if (bottom === 'butter') {
        game.score += 4
        updateScore()
    }
}


function beans() {
    game.potatoStack.forEach(function (card) {
        if (card === 'beans') {
            game.beanCount += 1
        }
    })
    if (game.beanCount < 6) {
        game.score += (game.beanCount * game.beanCount)
    } else if (game.beanCount > 5) {
        game.score += 25
    }
    updateScore()
}


function calculateScore() {
    butter()
    beans()
}
    