const homeIcon = document.querySelector("#home-icon");
const mobileHomeIcon = document.querySelector("#mobile-home-icon");
const infoIcon = document.querySelector("#info-icon");
const mobileInfoIcon = document.querySelector("#mobile-info-icon");
const contactIcon = document.querySelector("#contact-icon");
const mobileContactIcon = document.querySelector("#mobile-contact-icon");

const homeContent = document.querySelector("#home-content");
const infoContent = document.querySelector("#info-content");
const contactContent = document.querySelector("#contact-content");

const navbarPanel = document.querySelector("#nav-bar-mobile-panel");
const navbar = document.querySelector("#nav-bar-mobile");

function navBar() {
	if (navbarPanel.className === "nav-bar-mobile-panel") {
		navbarPanel.classList.add("open");
		navbar.className = "nav-bar-mobile hiding";
		setTimeout(() => { navbar.className = "nav-bar-mobile hidden";}, 300);

	} else {
		navbarPanel.classList.remove("open");
		navbarPanel.classList.add("hiding");
		navbar.className = "nav-bar-mobile visible";
		setTimeout(() => {
			navbarPanel.className = "nav-bar-mobile-panel";
			navbar.className = "nav-bar-mobile";}, 300);
	}
}

function homeSelected() {
	if (homeIcon.className === "icon home") {
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
	if (infoIcon.className === "icon info") {
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
	if (contactIcon.className === "icon contact") {
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
	const body = document.querySelector('body');
	body.style.opacity = '1';
}