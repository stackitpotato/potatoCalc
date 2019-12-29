function updateScore() {
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
    console.log(scores)
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


function tuna() {

    for (var i = 0; i < stack.length; i++) {

        if (stack[i] === 'tuna') {

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

            game.score += tunaScore

        }
    }
}


function chilli() {

    for (var i = 0; i < stack.length; i++) {

        if (stack[i] === 'chilli') {

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

            game.score += chilliScore

        }
    }
}


function saltAndPepper() {

    let saltAndPepperStack = [];
    var element = 'saltAndPepper';
    var index = stack.indexOf(element);
    while (index != -1) {
        saltAndPepperStack.push(index);
        index = saltAndPepperStack.indexOf(element, index + 1);
    }

    saltAndPepperStack.forEach(function (value) {
        game.score += value
    })

}


function cheese() {
    let i = game.potatoStack.indexOf('cheese');
}


function calculateScore() {
    game.score = 0

    for (var i = 0; i < stack.length; i++) {

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
            tuna()
        }

        if (stack[i] === 'chilli') {
            chilli()
        }

        if (stack[i] === 'saltAndPepper') {
            saltAndPepper()
        }

        if (stack[i] === 'cheese') {
            cheese()
        }

        updateScore()
        game.potatoStack = []
    }
}