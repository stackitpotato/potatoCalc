function updateScore() {
    document.querySelector('.score').textContent = 'Score: ' + game.score
}


function butter() {
    //bottom of the stack (first item selected)
    let bottom = game.potatoStack[0]

    if (bottom === 'butter') {
        game.score += 4
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
    var index = game.potatoStack.indexOf(element);
    while (index != -1) {
        saltAndPepperStack.push(index);
        index = saltAndPepperStack.indexOf(element, index + 1);
    }

    saltAndPepperStack.forEach(function (value) {
        game.score += value
    })

}


// function cheese() {
//     let i = game.potatoStack.indexOf('cheese');
// }


function calculateScore() {
    game.score = 0
    butter()
    beans()
    chicken()
    tuna()
    chilli()
    saltAndPepper()

    updateScore()
    game.potatoStack = []
}
    