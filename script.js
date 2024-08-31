document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(this); // Create a FormData object from the form
    
    fetch('https://testing-app-1.onrender.com/signup', { // Use your backend URL
        method: 'POST',
        body: formData, // Send the FormData object
        // No need to set 'Content-Type': 'multipart/form-data' as FormData handles this automatically
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Get the response text
    })
    .then(data => {
        // Check if the response contains an error message
        if (data.includes('Error')) {
            alert('An error occurred: ' + data);
        } else {
            window.location.href = 'https://frontend-2drz.onrender.com/index.html'; // Redirect on successful submission
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    });
});
