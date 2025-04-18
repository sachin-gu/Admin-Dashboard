
function changeTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const menuItems = document.querySelectorAll('.sidebar ul li');
  menuItems.forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');
}


// password

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPasswordCheckbox = document.getElementById("showPassword");
const verifyBtn = document.getElementById("verifyBtn");
const submitBtn = document.getElementById("submitBtn");
const messageDiv = document.getElementById("message");

// Show/hide password
showPasswordCheckbox.addEventListener("change", () => {
  const type = showPasswordCheckbox.checked ? "text" : "password";
  passwordInput.type = type;
  confirmPasswordInput.type = type;
});

// Verify passwords
verifyBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password.length < 6) {
    messageDiv.textContent = "Password must be at least 6 characters.";
    messageDiv.style.color = "red";
    submitBtn.disabled = true;
  } else if (password !== confirmPassword) {
    messageDiv.textContent = "Passwords do not match.";
    messageDiv.style.color = "red";
    submitBtn.disabled = true;
  } else {
    messageDiv.textContent = "✅ Passwords match!";
    messageDiv.style.color = "green";
    submitBtn.disabled = false;
  }
});

