let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#guessSubmit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".gusses")
const remaining = document.querySelector(".remaining")
const lowOrHi = document.querySelector(".lowOrHi")
const resultPara = document.querySelector(".result")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value) 
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if (guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100")
    } else {
        prevGuess.push(guess)
       if(numGuess === 10){
            displayGuess(guess)
            displayMsg(`Game over. Random number was ${randomNumber}`)
            endGame()
       } else{
        displayGuess(guess)
        checkGuess(guess)
       }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You got it right! You Won.`)
        endGame()
    } else if (guess < randomNumber){
        displayMsg(`Your guess is too low`)
    } else if (guess > randomNumber){
        displayMsg(`Your guess is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = Math.max(0, 11 - numGuess)
}

function displayMsg(msg){
    lowOrHi.innerHTML = `<h3>${msg}</h3>`
    resultPara.style.backgroundColor = "cadetblue"
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = '<h3 id="newGame">Start New Game</h3>'
    resultPara.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        resultPara.removeChild(p)
        playGame = true;
    })
}
