// Developed by Ram Yadav

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } 
    else if (value === '=') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } 
    else if (value === '%') {
      try {
        const percent = eval(currentInput) / 100;
        display.textContent = percent;
        currentInput = percent.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    }
    else {
      if (resultDisplayed && !isNaN(value)) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
