game = {
//empty array representing player stack, to be filled with selected cards
    potatoStack: [],

//empty array to hold the scores of each card in the stack (for cheese purposes)
    potatoStackScores: [],

    saltAndPepperScore: 0,

// Node list of all the card elements from HTML
    cards: document.querySelectorAll('.card'),

//number of beans cards in stack
    beanCount: 0,

//boolean if you have the most chicken:
    mostChicken: 0,

//final stack score (result of potatoStackScores added together)
    score: 0
}

var stack = game.potatoStack

var scores = game.potatoStackScores


/** adding a card to the potato stack when clicked:
 * 1) takes HTML id of each card
 * 3) adds it to the potatoStack (array in game object)
 */
game.cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        e.stopImmediatePropagation()
        stack.push(this.id)
        alert("Added!")
        modal.style.display = "none";
        if (this.id === 'saltAndPepper') {
            document.querySelector('.stackDisplay').innerHTML += "<li>salt and pepper</li>"
        } else {
            document.querySelector('.stackDisplay').innerHTML += "<li>" + this.id + "</li>"
        }

    })
})

//mostChicken button functionality
document.querySelector('.mostChicken').addEventListener('click', function (e) {
    e.preventDefault()
    game.mostChicken = 1
    document.querySelector('.mostChicken').style.display = "none"
    document.querySelector('.mostChickenMessage').style.display = "block"
})

document.querySelector('.mostChickenMessage').addEventListener('click', function (e) {
    e.preventDefault()
    game.mostChicken = 0
    document.querySelector('.mostChicken').style.display = "block"
    document.querySelector('.mostChickenMessage').style.display = "none"
})

//calculate Score button functionality
document.querySelector('.calculate').addEventListener('click', function (e) {
    e.preventDefault()
    calculateScore()
})


// Get the modal
var modal = document.querySelector('.modal');

document.querySelector('.myBtn').addEventListener('click', function () {
    modal.style.display = "block";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})