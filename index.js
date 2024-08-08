const randomWord1 = ["a", "b", "u", "e", "l", "a"]
const randomWord2 = ["b", "r", "u", "t", "a", "l"]
const randomWord3 = ["h", "a", "b", "l", "a", "r"]

const letterInput1 = document.getElementById("letterInput1")
const letterInput2 = document.getElementById("letterInput2")
const letterInput3 = document.getElementById("letterInput3")
const letterInput4 = document.getElementById("letterInput4")
const letterInput5 = document.getElementById("letterInput5")
const letterInput6 = document.getElementById("letterInput6")

const showWordH1 = document.getElementById("showWord")

let focusId = 0

let idWord = randomIntFromInterval(1, 3)

let disorganizedWord = []

let disorganizedString = ""


function getDisorganizedWord() {
    switch (idWord) {
        case 1:
            disorganizedWord = randomWord1.sort()
            break;
        case 2:
            disorganizedWord = randomWord2.sort()
            break;
        case 3:
            disorganizedWord = randomWord3.sort()
            break;
        default:
            break;
    }

    for (let i = 0; i < disorganizedWord.length; i++) {
        const letter = disorganizedWord[i];
        disorganizedString = disorganizedString + letter
    }

    showWordH1.textContent = disorganizedString
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

getDisorganizedWord()
console.log(disorganizedWord)

window.addEventListener('load', () => {
    letterInput1.focus()
    focusId = focusId + 1
})

window.addEventListener('keydown', (event) => {
    const key = event.code
    console.log(key)
    if (key.includes('Key')) {
        if (focusId != 7) {
            console.log(focusId)
            updateInputFocus()
            focusId = focusId + 1
        } else {
            resetLetterInputs()
        }
    }
})

function updateInputFocus() {
    console.log("Update focus")
    switch (focusId) {
        case 1:
            letterInput1.focus()
            break;
        case 2:
            letterInput2.focus()
            break;
        case 3:
            letterInput3.focus()
            break;
        case 4:
            letterInput4.focus()
            break;
        case 5:
            letterInput5.focus()
            break;
        case 6:
            letterInput6.focus()
            break;
        case 7:
            resetLetterInputs()
            letterInput1.focus()
            break;
        default:
            break;
    }
}

function resetLetterInputs() {
    letterInput1.value = ""
    letterInput2.value = ""
    letterInput3.value = ""
    letterInput4.value = ""
    letterInput5.value = ""
    letterInput6.value = ""

    focusId = 2
    letterInput1.focus()
}