game = {
//empty array representing player stack, to be filled with selected cards
    potatoStack: [],

// Node list of all the card elements from HTML
    cards: document.querySelectorAll('.card'),

//empty 'score' value to be added to throughout the game
    score: 0
}

//bottom of the stack (first item selected)
var bottom = game.potatoStack[0]

//top of the stack (count of items -1 to account for zero index)
var top = game.potatoStack[game.potatoStack.count - 1]



function potatoCalc() {
    if (bottom == 'butter') {
        document.querySelector('.score').textContent = 'Score: '
        score += 4
    }
}

/** adding a card to the potato stack when clicked:
 * 1) takes HTML id of each card
 * 2) sets it to 'cardName'
 * 3) adds it to the potatoStack (array in game object)
 */
game.cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        e.stopImmediatePropagation()
        let cardName = this.id
        game.potatoStack.push(cardName)
    })
})



// Butter: BOTTOM = 4, other = 0

// Beans: 1 for every bean in stack
//forEach loop

// Chilli: 2, +1 for every bean/chilli it's next to, -1 for every tuna it's next to

//Cheese: doubles the points of the layer underneath

//Mayo: counts as tuna/chicken as long as it's next to one

//Tuna: 4, -2 for every chilli, chicken or beans it's nest to

//Chicken: if you have the most, each one is 3. If not each is worth 1
//'most chicken?' buttons

//Salt+Pepper: +1 to every layer underneath



//for loop will help to identify position of things

// var thing = ['tuna', 'mayo', 'butter']
//
// var last = thing.pop()
//
// if (last === 'butter'){
//     console.log('4points')
// }
//
// thing[0]
//
// for(var i=0;i<thing.count; i++){
//
// }





