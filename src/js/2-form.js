const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = 'feedback-form-state';

function savedForm() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function fillForm() {
  const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedFormData) {
    emailInput.value = savedFormData.email || '';
    messageInput.value = savedFormData.message || '';
  }
}

fillForm();

form.addEventListener('input', () => {
  savedForm();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value.trim() && messageInput.value.trim()) {
    console.log({
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill out both fields.');
  }
});