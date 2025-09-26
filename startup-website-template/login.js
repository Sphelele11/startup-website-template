const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const welcomeMessage = document.getElementById('welcome');

function showLogin() {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  welcomeMessage.style.display = 'none';
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
}

function showSignup() {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  welcomeMessage.style.display = 'none';
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
}

loginForm.onsubmit = function(e) {
  e.preventDefault();

  // Optional: Replace alert with console.log for testing
  console.log('Login successful! Redirecting...');

  // Redirect to home page after a short delay (to simulate processing)
  setTimeout(function() {
    window.location.href = 'index.html'; // Replace with your actual homepage URL
  }, 100); // Delay in milliseconds
};


signupForm.onsubmit = function(e) {
  e.preventDefault();

console.log('Signup Successful Redirecting.....');

setTimeout(function() {
  window.location.href ='index.html';
},100);

  // Add your sign-up processing logic here

  alert('Sign Up successful! You can now login.');
  // After sign-up, optionally switch to login form:
  showLogin();
};
