const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");

// Toggle Password
togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁";
    }
});

// Validation
form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMsg.style.color = "#ff4d4d";

    if (username.value.trim() === "" || password.value.trim() === "") {
        errorMsg.textContent = "All fields are required";
        return;
    }

    if (password.value.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters";
        return;
    }

    // Success demo
    errorMsg.style.color = "lightgreen";
    errorMsg.textContent = "Login successful (demo)";
});
