function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error message
    errorMessage.innerHTML = "";

    // Simple validation: Check if username and password are empty
    if (username === "" || password === "") {
        errorMessage.innerHTML = "Please enter both username and password.";
        return false; // Prevent form submission
    }

    // You can add more validation here (e.g., regex checks, etc.)

    // If everything is correct, the form will submit (for demo, we return true)
    alert("Login successful! (In real scenarios, you would send the data to the server.)");
    return true;
}