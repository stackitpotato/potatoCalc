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
    game.beanCount = 0
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


function chicken() {

    if (game.mostChicken) {
        game.potatoStack.forEach(function (card) {
            if (card === 'chicken') {
                game.score += 3
            }
        })
    } else {
        game.potatoStack.forEach(function (card) {
            if (card === 'chicken') {
                game.score += 1
            }
        })
    }
}


// function cheese() {
//     let i = game.potatoStack.indexOf('cheese');
// }


function calculateScore() {
    game.score = 0
    butter()
    beans()
    game.potatoStack = []
}
    