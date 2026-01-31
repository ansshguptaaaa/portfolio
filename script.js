// ===== Reusable function =====
function showMessage(msg, color) {
    const formMsg = document.getElementById("formMsg");
    formMsg.textContent = msg;
    formMsg.style.color = color;
}

// ===== Form validation =====
document.getElementById("contactForm")
.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        showMessage("All fields are required!", "red");
        return;
    }

    showMessage("Message sent successfully!", "green");
});


// ===== Interactive Feature 1: Dark mode toggle =====
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// ===== Interactive Feature 2: Welcome alert =====
window.addEventListener("load", function () {
    alert("Welcome to Ansh Gupta's Portfolio!");
});


// ===== Interactive Feature 3: Dynamic year update =====
const footer = document.querySelector("footer p");
footer.textContent = "© " + new Date().getFullYear() + " Ansh Gupta";
