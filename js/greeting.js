// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Roberto';

// Here you can change your greetings
const gree1 = 'Vamos a mimir!  ';
const gree2 = 'Buenos dias!  ';
const gree3 = 'Buenas!';
const gree4 = 'Buenas tardes,  ';
const gree5 = 'Buenas tardes,  ';
const gree6 = 'Buenas noches,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
