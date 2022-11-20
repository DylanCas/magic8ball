var userName = 'Dylan'

// presents welcoming whether or not user provides a userName value
userName === '' ? console.log('Welcome, Stranger!') : console.log('Welcome, ' + userName + '!')
const userQuestion = 'Does chicken tortilla soup sound like a good plan?'

// Statement of user name as well as their question asked
userName === '' ? console.log('Stranger asks: ' + userQuestion) : console.log(userName + ' asks: ' + userQuestion)

// generates random number to select answers
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = ""
// Logs various answers based on result of the RNG
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain'
  console.log(eightBall)
  break;
  case 1:
  eightBall = 'It is decidedly so'
  console.log(eightBall)
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  console.log(eightBall)
  break;
  case 3:
  eightBall = 'Cannot predict now'
  console.log(eightBall)
  break;
  case 4:
  eightBall = 'Do not count on it'
  console.log(eightBall)
  break;
  case 5:
  eightBall = 'My sources say no'
  console.log(eightBall)
  break;
  case 6:
  eightBall = 'Outlook not so good'
  console.log(eightBall)
  break;
  case 7:
  eightBall = 'Signs point to yes'
  console.log(eightBall)
  break;
  // I dont feel a default is needed here due to random numbers being used
}