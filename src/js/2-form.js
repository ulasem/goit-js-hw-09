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
  formData.email = event.currentTarget.elements.email.value;
  formData.message = event.currentTarget.elements.message.value;

  localStorage.setItem(feedback_form_state, JSON.stringify(formData));
}

function checkData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    emailInput.value = data.email;
    textArea.value = data.message;
  } else {
    return;
  }
}

function handlerSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || !textArea.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(feedback_form_state);
  event.currentTarget.reset();
}
