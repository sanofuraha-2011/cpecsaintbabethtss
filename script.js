// ================= APPLY BUTTON =================
function apply() {
    const applyBox = document.getElementById("applyBox");

    if (applyBox) {
        applyBox.style.display = "flex";
    }
}


// ================= SUBMIT APPLICATION =================
function submitApplication() {

    let name = document.getElementById("name")?.value.trim();
    let email = document.getElementById("email")?.value.trim();
    let program = document.getElementById("program")?.value.trim();
    let msg = document.getElementById("msg");

    if (!msg) return;

    // Validation
    if (name === "" || email === "" || program === "") {
        msg.style.color = "yellow";
        msg.innerText = "Please fill all fields ⚠️";
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid email address ❌";
        return;
    }

    // Success message
    msg.style.color = "#0ffb02";
    msg.style.fontSize = "20px";
    msg.innerText = "You have successfully applied ✔️";

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("program").value = "";
}


// ================= COUNTER ANIMATION =================
function animateCounter(id, start, end, duration) {

    let obj = document.getElementById(id);

    if (!obj) return;

    let current = start;
    let range = end - start;

    if (range <= 0) {
        obj.innerHTML = end + "+";
        return;
    }

    let stepTime = Math.max(Math.floor(duration / range), 10);

    let timer = setInterval(function () {

        current++;

        obj.innerHTML = current + "+";

        if (current >= end) {
            clearInterval(timer);
        }

    }, stepTime);
}


// ================= BACKGROUND SLIDER =================
const images = [
    "assets/bg.png",
    "assets/realculture.jpg",
    "assets/schoolteam.png"
];

let index = 0;

function changeBackground() {

    if (images.length === 0) return;

    document.body.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${images[index]}')`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    index = (index + 1) % images.length;
}


// ================= ACTIVE NAV LINK =================
function highlightActiveLink() {

    let links = document.querySelectorAll("nav a");

    links.forEach(link => {

        let currentPage = window.location.pathname.split("/").pop();

        if (link.getAttribute("href") === currentPage) {

            link.style.background = "#ffb703";
            link.style.color = "#000";
            link.style.borderRadius = "5px";
        }
    });
}


// ================= CONTACT FORM =================
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("cname")?.value.trim();
    let email = document.getElementById("cemail")?.value.trim();
    let subject = document.getElementById("csubject")?.value.trim();
    let message = document.getElementById("cmessage")?.value.trim();
    let msg = document.getElementById("cmsg");

    if (!msg) return;

    // Validation
    if (name === "" || email === "" || subject === "" || message === "") {

        msg.style.color = "red";
        msg.style.fontSize = "20px";
        msg.innerText = "Please fill all fields ⚠️";

        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        msg.style.color = "red";
        msg.innerText = "Enter a valid email ❌";

        return;
    }

    // Success message
    msg.style.color = "#00ff00";
    msg.style.fontSize = "40px";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    msg.innerText = "THE MESSAGE WAS SENT ✔️";

    // Reset form
    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("csubject").value = "";
    document.getElementById("cmessage").value = "";

    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}


// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", function () {

    // Counters
    animateCounter("students", 1, 280, 2000);
    animateCounter("teachers", 1, 25, 2000);
    animateCounter("partners", 1, 7, 2000);

    // Background slider
    changeBackground();
    setInterval(changeBackground, 4000);

    // Active nav link
    highlightActiveLink();

    // Fade effect
    document.body.style.opacity = "1";
});


// ================= GALLERY =================
function openGallery() {

    let modal = document.getElementById("galleryModal");

    if (modal) {
        modal.style.display = "block";
    }
}

function closeGallery() {

    let modal = document.getElementById("galleryModal");

    if (modal) {
        modal.style.display = "none";
    }
}
