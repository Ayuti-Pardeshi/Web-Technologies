// Update experience value display
document.getElementById('range').addEventListener('input', function () {
    document.getElementById('experienceValue').textContent = this.value;
});

// Handle form submission and generate passport
document.getElementById('passport-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('url').value;
    const dob = document.getElementById('date').value;
    const appointment = document.getElementById('datetime-local').value;
    const favColor = document.getElementById('color').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
        .map(lang => lang.value).join(', ');
    const experience = document.getElementById('range').value;
    const borderColor = document.querySelector('input[name="borderColor"]:checked').value;

    // Populate the passport with these values
    document.getElementById('passport-name').textContent = name;
    document.getElementById('passport-email').textContent = email;
    document.getElementById('passport-website').textContent = website;
    document.getElementById('passport-dob').textContent = dob;
    document.getElementById('passport-appointment').textContent = appointment;
    document.getElementById('passport-favColor').textContent = favColor;
    document.getElementById('passport-gender').textContent = gender;
    document.getElementById('passport-languages').textContent = languages;
    document.getElementById('passport-experience').textContent = experience;

    // Display uploaded image
    const fileInput = document.getElementById('file');
    const passportPhoto = document.getElementById('passport-photo');
    const reader = new FileReader();

    reader.onload = function (e) {
        passportPhoto.innerHTML = `<img src="${e.target.result}" alt="Passport Photo">`;
    };

    if (fileInput.files.length > 0) {
        reader.readAsDataURL(fileInput.files[0]);
    }

    // Apply border color to the passport
    document.getElementById('passport').style.borderColor = borderColor;

    // Show the passport
    document.getElementById('passport').style.display = 'flex';
});

// Handle passport download
document.getElementById('download-passport').addEventListener('click', function () {
    html2canvas(document.getElementById('passport')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'passport.png';
        link.click();
    });
});
