/* Manejo del DOM */

const loginBg = document.getElementById('login-bg');
const secondScreen = document.getElementById('second-screen');
const password = document.getElementById('password');
const user = document.getElementById('user');
const enterButton = document.getElementById('enter-button');
const errorMessage = document.getElementById('error-message');
// Función para validar contraseña correcta

// Definir variable para realizar función 
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

// Función para validar contraseña correcta
const validation = () => { 
  const password = document.getElementById('password');
  if (password.value === passwordTrue) {
    loginBg.classList.add('hide');
    secondScreen.classList.replace('hide', 'show');
    event.preventDefault();
  } else {
    loginBg.classList.add('hide');
    errorMessage.classList.add('hide');
  }
}; 
enterButton.addEventListener('click', validation);