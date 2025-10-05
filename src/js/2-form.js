const feedback_form_state = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input');
const textArea = feedbackForm.querySelector('textarea');

checkData();

feedbackForm.addEventListener('input', handlerInput);
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();

  localStorage.setItem(feedback_form_state, JSON.stringify(formData));
}

function checkData() {
  const savedData = JSON.parse(localStorage.getItem(feedback_form_state));

  if (savedData) {
    emailInput.value = savedData.email || '';
    textArea.value = savedData.message || '';

    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
  }
}

function handlerSubmit(event) {
  event.preventDefault();

  if (!emailInput.value.trim() || !textArea.value.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(feedback_form_state);
  event.currentTarget.reset();
  formData.email = '';
  formData.message = '';
}
