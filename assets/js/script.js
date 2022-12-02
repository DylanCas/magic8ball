
const userNameBtn = document.getElementById("userNameBtn")
const askBtn = document.getElementById("askBtn")
const questionScreenEl = document.getElementById("questionScreen")

// presents welcoming whether or not user provides a userName value
userNameBtn.addEventListener("click", function(){
  const userName = document.getElementById("userName").value
  const userGreetingEl = document.getElementById('userGreeting')
  if (userName === '') {
    userGreetingEl.textContent = 'Welcome, Stranger!'
  } else {
    userGreetingEl.textContent = 'Welcome, ' + userName + '!'
  } 
  userGreetingEl.style.display = "block"
  questionScreenEl.style.display = "block"
});

// Offer input box to enter a question, and button to submit questions. Will display question on screen
askBtn.addEventListener("click", function() {
  const userName = document.getElementById("userName").value
  const userQuestionBox = document.getElementById("questionBox").value
  const userQuestionEl = document.getElementById("userQuestion")
  // Statement of user name as well as their question asked
  if (userName === "") {
  userQuestionEl.textContent = "Stranger asks: " + userQuestionBox
  } else {
    userQuestionEl.textContent = userName + " asks: " + userQuestionBox
  }
  userQuestionEl.style.display = "block"
  // generates random number to select answers

let answer = document.getElementById("questionAnswer")
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ""
// Logs various answers based on result of the RNG
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 1:
  eightBall = 'It is decidedly so'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 3:
  eightBall = 'Cannot predict now'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 4:
  eightBall = 'Do not count on it'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 5:
  eightBall = 'My sources say no'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 6:
  eightBall = 'Outlook not so good'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  case 7:
  eightBall = 'Signs point to yes'
  answer.textContent = eightBall
  console.log(eightBall)
  break;
  // I dont feel a default is needed here due to random numbers being used
}
})