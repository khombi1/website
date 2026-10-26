document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiry-form');
  const confirmation = document.getElementById('form-confirmation');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
      }

      form.style.display = 'none';
      confirmation.style.display = 'block';
    });
  }
});