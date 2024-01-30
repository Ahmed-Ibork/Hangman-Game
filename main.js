let section = document.querySelector('section')
let WordFrom = document.querySelector('.word_Random .word')
let letters = document.querySelectorAll('.letters span')
let ul = document.querySelector('.letter')
let HangMan = document.querySelectorAll('.draw span')


// Object Contains Three Lists :
let Words_List = {
    programming: ['python', 'javascript', 'php', 'css', 'django', 'dart', 'ruby'],
    countries: ['morocco', 'egypt', 'ksa', 'palestine', 'yemen', 'iraq', 'tunisia', 'syria'],
    animals: ['lion', 'tiger', 'elephant', 'deer', 'cat', 'fox', 'giraffe', 'dog'],
    names: ['mohammed', 'ahmed', 'khalid', 'ibrahim', 'ali', 'fatima', 'khadija'],
}

// List  :
let TypeOfWord = Object.keys(Words_List);

// Choose A Random Word From TypeOfWord :
let WordRandom = TypeOfWord[Math.floor(Math.random() * TypeOfWord.length)]

// Change TextContent Of </WordFrom> In Page :
WordFrom.textContent = WordRandom;

// Choose A Random Word From Words_List :
let WordValues = Words_List[WordRandom];
let word = WordValues[Math.floor(Math.random() * WordValues.length)].split('');

// Variables :
let NumberOfErrors = 0;
let number = 0;
// Print The Letters Place In The Page :
for (let i = 0; i < word.length; i++) {
    let li = document.createElement('li')
    li.classList.add('li')
    if (word[i] === ' ') {
        li.classList.add('space')
        li.textContent = '_'
        number++
    }
    ul.appendChild(li)
}

// Get <Li> From The Page : 
let NewArray = document.querySelectorAll('.letter li')

// Check :
letters.forEach((x) => {
    x.onclick = function () {
        // Add Pointer Event To Letter :
        x.classList.add('none')
        // Check If This Letter In WordRandom :
        if (word.includes(x.textContent.toLowerCase())) {
            AddLetterToNewArray(x.textContent)
        } else {
            SetPartsOfHangMan()
        }
    }
})
function AddLetterToNewArray(letter) {
    word.forEach((x ,index) => {
        if (x === letter.toLowerCase()) {
            NewArray[index].textContent = letter
            NewArray[index].style.borderBottomColor = 'blue'
            number++
        }
        if (number === NewArray.length) {
            letters.forEach((x) => {
                x.classList.add('none')
            })
            EndGame()
        }
    })
    document.getElementById('success').play();
}
function SetPartsOfHangMan() {
    HangMan[NumberOfErrors].style.opacity = '1'
    NumberOfErrors++
    if (NumberOfErrors === 9) {
        letters.forEach((x) => {
            x.classList.add('none')
        })
        GameOver()
    }
    document.getElementById('fail').play();
}
function EndGame() {
    let PopUp = document.createElement('div')
    let button = document.createElement('button')
    let div = document.createElement('div')
    // Add Classes To The Element :
    PopUp.classList.add('pop_up', 's-color')
    button.classList.add('button')
    div.classList.add('div')
    // Append Childs To Element :
    PopUp.appendChild(document.createTextNode('You Win !'))
    div.appendChild(document.createTextNode(`You made a mistake ${NumberOfErrors} ${NumberOfErrors <= 1 ? 'time': 'times' }`))
    PopUp.appendChild(div)
    button.appendChild(document.createTextNode('Restart'))
    PopUp.appendChild(button)
    // Append PopUp To Section :
    section.appendChild(PopUp)
    // Command The Button :
    button.onclick = function () {
        location.reload()
    }
}
function GameOver() {
    let PopUp = document.createElement('div')
    let button = document.createElement('button')
    let div = document.createElement('div')
    // Add Classes To The Element :
    PopUp.classList.add('pop_up', 'f-color')
    button.classList.add('button')
    div.classList.add('div')
    // Append Childs To Element :
    PopUp.appendChild(document.createTextNode(`You Lose !`))
    div.appendChild(document.createTextNode(`The Word Was ${word.join('').toLowerCase()}`))
    PopUp.appendChild(div)
    button.appendChild(document.createTextNode('Restart'))
    PopUp.appendChild(button)
    // Append PopUp To Section :
    section.appendChild(PopUp)
    // Command The Button :
    button.onclick = function () {
        location.reload()
    }
    document.getElementById('gameOver').play();
}














