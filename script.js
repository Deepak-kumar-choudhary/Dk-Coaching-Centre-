/* ===========================
DK Coaching Centre
script.js
=========================== */

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#08142d";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";
    } else {
        header.style.background = "rgba(8,20,45,.95)";
        header.style.boxShadow = "none";
    }
});

// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 400) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// ==========================
// Fade Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = this.querySelector("input[type='text']");
        const email = this.querySelector("input[type='email']");
        const message = this.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill all fields.");
            return;

        }

        alert("Thank You! Your message has been sent.");

        form.reset();

    });

}

// ==========================
// Admission Popup
// ==========================

const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

if (openPopup && popup) {

    openPopup.addEventListener("click", () => {

        popup.style.display = "flex";

    });

}

if (closePopup && popup) {

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (popup && e.target === popup) {

        popup.style.display = "none";

    }

});

// ==========================
// Popup Form Submit
// ==========================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Admission Request Submitted Successfully.");

        this.reset();

        if (popup) {
            popup.style.display = "none";
        }

    });

}

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// Welcome Message
// ==========================

window.addEventListener("load", () => {

    console.log("Welcome to DK Coaching Centre");

});