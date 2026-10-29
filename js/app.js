// ================================
// ELEMENTS
// ================================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

// ================================
// OPEN MENU
// ================================

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    document.body.style.overflow = "hidden";

});

// ================================
// CLOSE MENU
// ================================

closeBtn.addEventListener("click", closeMenu);

mobileLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";

}



const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".plan-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(item => item.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});


const modal = document.getElementById("enquiryModal");

// Open from buttons
document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        openModal();
    });
});

// Close button
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Close when clicking outside
modal.addEventListener("click", e => {
    if (e.target === modal) {
        closeModal();
    }
});

function openModal() {
    if (!modal.classList.contains("active")) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

// Auto open after 15 seconds
setTimeout(() => {
    openModal();

    // Then open every 45 seconds
    setInterval(() => {
        openModal();
    }, 45000);

}, 15000);