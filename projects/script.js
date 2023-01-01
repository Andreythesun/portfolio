// get HTML elements to variables
const StartButton = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const submit = document.querySelector('.submit');
const alert = document.querySelector('.alert');

// random function
const getRandomNumber = (min, max) => {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

// create variables for question
let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);

// event listeners
StartButton.addEventListener('click', () => {
  gameContainer.style.display = 'flex';
  StartButton.style.display = 'none';
  answer.placeholder = `${firstNumber} * ${secondNumber} = `;
  question.innerText = `How much is ${firstNumber} times ${secondNumber}`;
    
});

console.log(answer.value);

submit.addEventListener('click', () => {
  const userCorrectAnswer = Number(answer.value);
  const correctAnswer = firstNumber * secondNumber;
  
  if (correctAnswer === userCorrectAnswer) {
    answer.value = '';
    firstNumber = getRandomNumber(1, 9);
    secondNumber = getRandomNumber(1, 9);
    question.innerText = `How much is ${firstNumber} times ${secondNumber}`;
    answer.placeholder = `${firstNumber} * ${secondNumber} = `;
    answer.style.border = "1px solid green";
    alert.style.display = "flex";
    alert.style.color ="green";
    alert.innerText = "Congratulations! Your answer is right!";
    //alert("Congratulations! Your answer is right!");
  }
  else {
    answer.style.border = "1px solid red";
    alert.style.display = "flex";
    alert.style.color ="red";
    alert.innerText = "Sorry, your answer is wrong :(";
    //alert("Sorry, your answer is wrong :(");
  }
});
