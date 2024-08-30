document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
    } else {
        // If password validation passes, send form data to the backend
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(this);
        
        fetch('https://testing-app-1.onrender.com/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(result => {
            // Handle the result from the server
            console.log('Success:', result);
            window.location.href = '/success.html'; // Redirect to success page
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
