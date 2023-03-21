// This script is provided by pensierinmusica and it's available on github

// Helper to validate email based on regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

export default function validateEmail(email) {
  if (typeof email === 'string' && email.length > 5 && email.length < 61 && EMAIL_REGEX.test(email)) {
    return true;
  } else {
    return false;
  }
}

// TODO: ping the email adress to check if it exists