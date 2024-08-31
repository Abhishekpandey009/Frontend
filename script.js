document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('https://testing-app-1.onrender.com/signup', {
        method: 'POST',
        body: formData
        // Remove the Content-Type header
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        if (data.includes('Error')) {
            alert('An error occurred: ' + data);
        } else {
            window.location.href = 'https://frontend-2drz.onrender.com/index.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    });
});
