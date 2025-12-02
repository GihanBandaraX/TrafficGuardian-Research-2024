// contact.js

(function() {
    emailjs.init('YdxpAv39QC3NMwlrC'); // EmailJS public key
})();

// Attach an event listener to the form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const fromEmail = document.getElementById('from_email').value;  // Client's email
    const fromName = document.getElementById('from_name').value;    // Client's name
    const subject = document.getElementById('subject').value;       // Subject
    const message = document.getElementById('message').value;       // Client's message

    // Validate required fields
    if (!fromName || !fromEmail || !subject || !message) {
        alert("Please fill in all required fields.");
        return; // Stop execution if required fields are missing
    }

    // Show a simple alert indicating the message is being sent
    alert("Sending your message...");

    // Define the email parameters to pass to EmailJS
    const emailParams = {
        from_name: fromName,       // Sender's name
        from_email: fromEmail,     // Sender's email
        subject: subject,          // Message subject entered by client
        message: message,          // Client's message
        to_email: 'trafficguardian068@gmail.com'  // Your company email
    };

    // Use EmailJS to send the form data
    emailjs.send('service-01', 'template-01', emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById('contactForm').reset(); 
        })
        .catch(function(error) {
            console.error('Failed to send message:', error);
            alert("Message send failed: " + JSON.stringify(error));
        });
});
