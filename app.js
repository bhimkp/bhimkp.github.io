document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.jpg'
        },
        {
            name: 'fries',
            img: 'images/fries.jpg'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.jpg'
        },
        {
             name: 'ice-cream',
            img: 'images/ice-cream.jpg'
        },
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'peeza',
            img: 'images/peeza.jpg'
        },
        {
            name: 'peeza',
            img: 'images/peeza.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'vegetables',
            img: 'images/food.jpeg'
        },
        {
            name: 'vegetables',
            img: 'images/food.jpeg'
        },
        {
            name: 'girl',
            img: 'images/girl.jpg'
        },
        {
            name: 'girl',
            img: 'images/girl.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    var cardChosen = []
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blk.jpg')
            card.setAttribute('data-id', i)

            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if(cardChosen[0] === cardChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/blk.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blk.jpg')
            alert('Sorry, try again')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations!, You found them all!'
        }
    }

    //flip your card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardChosen.length === 2){
            setTimeout(checkForMatch, 200)

        }
    }

    createBoard()

})