const homeIcon = document.getElementById("home-icon");
const mobileHomeIcon = document.getElementById("mobile-home-icon");
const infoIcon = document.getElementById("info-icon");
const mobileInfoIcon = document.getElementById("mobile-info-icon");
const contactIcon = document.getElementById("contact-icon");
const mobileContactIcon = document.getElementById("mobile-contact-icon");

const homeContent = document.getElementById("home-content")
const infoContent = document.getElementById("info-content")
const contactContent = document.getElementById("contact-content")

function navBar() {
	const navbarPanel = document.getElementById("nav-bar-mobile-panel");
	const navbar = document.getElementById("nav-bar-mobile");

	if (navbarPanel.className === "nav-bar-mobile-panel") {
		navbarPanel.classList.add("open");
		navbar.className = "nav-bar-mobile hiding";
		setTimeout(() => { navbar.className = "nav-bar-mobile hidden";}, 300);

	} else {
		navbarPanel.classList.remove("open");
		navbarPanel.classList.add("hiding");
		navbar.className = "nav-bar-mobile visible";
		setTimeout(() => {  navbarPanel.className = "nav-bar-mobile-panel";}, 300); }
}

function homeSelected() {
	if (homeIcon.className === "home-icon") {
		homeIcon.classList.add("selected");
		mobileHomeIcon.classList.add("selected");

		infoIcon.classList.remove("selected");
		mobileInfoIcon.classList.remove("selected");

		contactIcon.classList.remove("selected");
		mobileContactIcon.classList.remove("selected");

		homeContent.className = "home-content visible";
		infoContent.className = "info-content hidden";
		contactContent.className = "contact-content hidden";
	}
}

function infoSelected() {
	if (infoIcon.className === "info-icon") {
		infoIcon.classList.add("selected");
		mobileInfoIcon.classList.add("selected");

		homeIcon.classList.remove("selected");
        mobileHomeIcon.classList.remove("selected");

		contactIcon.classList.remove("selected");
		mobileContactIcon.classList.remove("selected");

		homeContent.className = "home-content hidden";
		infoContent.className = "info-content visible";
		contactContent.className = "contact-content hidden";

	}
}

function contactSelected() {
	if (contactIcon.className === "contact-icon") {
		contactIcon.classList.add("selected");
		mobileContactIcon.classList.add("selected");

		homeIcon.classList.remove("selected");
		mobileHomeIcon.classList.remove("selected");

		infoIcon.classList.remove("selected");
		mobileInfoIcon.classList.remove("selected");

		homeContent.className = "home-content hidden";
		infoContent.className = "info-content hidden";
		contactContent.className = "contact-content visible";
	}
}

function bodyLoaded() {
	const body = document.getElementById('body');
	body.style.opacity = '1';
}