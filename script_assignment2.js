function toggleForm() {
    const formContainer = document.getElementById('profile-form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';

    if (formContainer.style.display === 'block') {
      document.getElementById('inputName').value = document.getElementById('profile-name').textContent;
      document.getElementById('inputRole').value = document.getElementById('profile-role').textContent;
      document.getElementById('inputAvailability').value = document.getElementById('profile-availability').textContent;
      document.getElementById('inputAge').value = document.getElementById('profile-age').textContent;
      document.getElementById('inputLocation').value = document.getElementById('profile-location').textContent;
      document.getElementById('inputExperience').value = document.getElementById('profile-experience').textContent;
      document.getElementById('inputEmail').value = document.getElementById('profile-email').textContent;
    }
  }

//  Function untuk munculin form,di bind onclick sama tombol "edit"
  function TampilkanData() {
    const formContainer = document.getElementById('profile-form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  }

//  Function untuk update profile data
  function UpdateData(event) {
    event.preventDefault();
    
// ambil values
    const name = document.getElementById('inputName').value;
    const role = document.getElementById('inputRole').value;
    const availability = document.getElementById('inputAvailability').value;
    const age = document.getElementById('inputAge').value;
    const location = document.getElementById('inputLocation').value;
    const experience = document.getElementById('inputExperience').value;
    const email = document.getElementById('inputEmail').value;

// update profile pake values
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-role').textContent = role;
    document.getElementById('profile-availability').textContent = availability;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('profile-location').textContent = location;
    document.getElementById('profile-experience').textContent = experience;
    document.getElementById('profile-email').textContent = email;

// hide form
    document.getElementById('profile-form-container').style.display = 'none';
  }