const randomWord1 = ["a", "b", "u", "e", "l", "a"]
const randomWord2 = ["b", "r", "u", "t", "a", "l"]
const randomWord3 = ["h", "a", "b", "l", "a", "r"]

const word1 = "abuela"
const word2 = "brutal"
const word3 = "hablar"


const letterInput1 = document.getElementById("letterInput1")
const letterInput2 = document.getElementById("letterInput2")
const letterInput3 = document.getElementById("letterInput3")
const letterInput4 = document.getElementById("letterInput4")
const letterInput5 = document.getElementById("letterInput5")
const letterInput6 = document.getElementById("letterInput6")

const showWordH1 = document.getElementById("showWord")

let focusId = -1

let idWord = randomIntFromInterval(1, 3)

let disorganizedWord = []

let disorganizedString = ""


function getDisorganizedWord() {
    disorganizedString = ""
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

    console.log("Put new word")
    showWordH1.textContent = ""
    console.log(showWordH1.textContent)
    console.log(disorganizedString)
    showWordH1.textContent = disorganizedString
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

getDisorganizedWord()

window.addEventListener('load', () => {
    letterInput1.focus()
    focusId = focusId + 1
})

window.addEventListener('keydown', (event) => {
    const key = event.code
    if (key.includes('Key')) {
        if (focusId != 7) {
            updateInputFocus()
            focusId = focusId + 1
        } else {
            resetLetterInputs()
        }
    }
})

function updateInputFocus() {
    switch (focusId) {
        case 0:
            letterInput1.focus()
            break;
        case 1:
            letterInput2.focus()
            break;
        case 2:
            letterInput3.focus()
            break;
        case 3:
            letterInput4.focus()
            break;
        case 4:
            letterInput5.focus()
            break;
        case 5:
            letterInput6.focus()
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

    focusId = 0
    letterInput1.focus()
    idWord = randomIntFromInterval(1, 3)
    getDisorganizedWord()
}

function winComprobation() {
    const reStructuredWord = structureRandomWord()
    switch (idWord) {
        case 1:
            if (reStructuredWord === word1) {
                alert("Bien hecho")
            } else {
                alert("Error")
            }
            break;
        case 2:
            if (reStructuredWord === word2) {
                alert("Bien hecho")
            } else {
                alert("Error")
            }
            break;
        case 3:
            if (reStructuredWord === word3) {
                alert("Bien hecho")
            } else {
                alert("Error")
            }
            break;
        default:
            break;
    }

    resetLetterInputs()
    letterInput1.focus()
}

function structureRandomWord() {
    let structureWord = ""
    structureWord = structureWord + letterInput1.value
    structureWord = structureWord + letterInput2.value
    structureWord = structureWord + letterInput3.value
    structureWord = structureWord + letterInput4.value
    structureWord = structureWord + letterInput5.value
    structureWord = structureWord + letterInput6.value
    return structureWord
}

letterInput6.addEventListener("input", () => {
    winComprobation()
})