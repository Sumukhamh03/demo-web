// Get the sign in and sign up forms
const signInForm = document.querySelector('#sign-in-form');
const signUpForm = document.querySelector('#sign-up-form');

// Add a submit event listener to the sign in form
signInForm.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form
  const email = signInForm.querySelector('input[name="email"]').value;
  const password = signInForm.querySelector('input[name="password"]').value;

  if (!email || !password) {
    // Display an error message
    alert('Please enter your email address and password.');
    return;
  }

  // Submit the form to the server
  // ...
});

// Add a submit event listener to the sign up form
signUpForm.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form
  const email = signUpForm.querySelector('input[name="email"]').value;
  const password = signUpForm.querySelector('input[name="password"]').value;
  const name = signUpForm.querySelector('input[name="name"]').value;

  if (!email || !password || !name) {
    // Display an error message
    alert('Please enter your email address, password, and name.');
    return;
  }

  // Submit the form to the server
  // ...
});
