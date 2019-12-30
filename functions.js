function displayScore() {
    document.querySelector('.score').textContent = 'Score: ' + game.score
}


function butter(i) {

    if (0 === i) {
        scores.push(4)
    } else {
        scores.push(0)
    }
}


function beans() {
    game.beanCount = 0

    stack.forEach(function (card) {
        if (card === 'beans') {
            game.beanCount += 1
        }
    })

    if (game.beanCount > 5) {
        scores.push(5)
    } else {
        scores.push(game.beanCount)
    }
}


function chicken() {

    if (game.mostChicken) {
        scores.push(3)
    } else {
        scores.push(1)
    }
}


function tuna(i) {

    let tunaScore = 4

    if (stack[i - 1] === 'chicken') {
        tunaScore -= 2
    } else if (stack[i - 1] === 'beans') {
        tunaScore -= 2
    } else if (stack[i - 1] === 'chilli') {
        tunaScore -= 2
    }

    if (stack[i + 1] === 'chicken') {
        tunaScore -= 2
    } else if (stack[i + 1] === 'beans') {
        tunaScore -= 2
    } else if (stack[i + 1] === 'chilli') {
        tunaScore -= 2
    }

    scores.push(tunaScore)

}


function chilli(i) {

    let chilliScore = 2

    if (stack[i - 1] === 'beans') {
        chilliScore += 1
    } else if (stack[i - 1] === 'chilli') {
        chilliScore += 1
    } else if (stack[i - 1] === 'tuna') {
        chilliScore -= 1
    }

    if (stack[i + 1] === 'beans') {
        chilliScore += 1
    } else if (stack[i + 1] === 'chilli') {
        chilliScore += 1
    } else if (stack[i + 1] === 'tuna') {
        chilliScore -= 1
    }

    scores.push(chilliScore)

}


function mayo() {
    scores.push(0)
}


function saltAndPepper(i) {
    scores.push(0)
    game.saltAndPepperScore += i
}


function cheese(i) {
    scores.push(0)
    if (scores[i-1] > 0) {
        scores[i - 1] = (scores[i - 1] * 2)
    }
}

function addScoresTogether() {

    scores.forEach(function (score) {
        game.score += score
    })

    game.score += game.saltAndPepperScore

}


function calculateScore() {
    game.score = 0
    game.saltAndPepperScore = 0

    for (i = 0; i < stack.length; i++) {

        if (stack[i] === 'chicken') {
            chicken()
        }

        if (stack[i] === 'butter') {
            butter(i)
        }

        if (stack[i] === 'beans') {
            beans()
        }

        if (stack[i] === 'tuna') {
            tuna(i)
        }

        if (stack[i] === 'chilli') {
            chilli(i)
        }

        if (stack[i] === 'mayo') {
            mayo()
        }

        if (stack[i] === 'saltAndPepper') {
            saltAndPepper(i)
        }

        if (stack[i] === 'cheese') {
            cheese(i)
        }
    }

    addScoresTogether()

    displayScore()

    stack = []
    scores = []

    document.querySelector('.stackDisplay').innerHTML = "<li></li>"

}