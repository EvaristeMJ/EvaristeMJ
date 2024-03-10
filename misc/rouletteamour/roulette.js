// Define the roulette wheel
const wheel = ['0', '32', '15', '19', '4', '21', '2', '25', '17', '34', '6', '27', '13', '36', '11', '30', '8', '23', '10', '5', '24', '16', '33', '1', '20', '14', '31', '9', '22', '18', '29', '7', '28', '12', '35', '3', '26'];

// Define the spin button
const spinButton = document.getElementById('spin-button');

// Define the roulette wheel div
const rouletteWheel = document.getElementById('roulette');

// Define the result div
const result = document.getElementById('result');

// Add a click event listener to the spin button
spinButton.addEventListener('click', () => {
  // Generate a random index for the roulette wheel
  const index = Math.floor(Math.random() * wheel.length);

  // Display the spinning animation
  rouletteWheel.innerHTML = `<div class="spinner"></div>`;

  // After a delay, display the result
  setTimeout(() => {
    result.innerHTML = `<h1>${wheel[index]}</h1>`;
    rouletteWheel.innerHTML = ``;
  }, 3000);

});