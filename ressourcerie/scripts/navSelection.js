const homeIcon = document.querySelector("#home-icon");
const mobileHomeIcon = document.querySelector("#mobile-home-icon");
const infoIcon = document.querySelector("#info-icon");
const mobileInfoIcon = document.querySelector("#mobile-info-icon");
const contactIcon = document.querySelector("#contact-icon");
const mobileContactIcon = document.querySelector("#mobile-contact-icon");

const homeFontIcon = document.querySelector("#home-font-icon");
const mobileHomeFontIcon = document.querySelector("#mobile-home-font-icon");
const infoFontIcon = document.querySelector("#info-font-icon");
const mobileInfoFontIcon = document.querySelector("#mobile-info-font-icon");
const contactFontIcon = document.querySelector("#contact-font-icon");
const mobileContactFontIcon = document.querySelector("#mobile-contact-font-icon");

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
	} 
	else {
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
		homeSelectedStyling();
		infoUnselectedStyling();
		contactUnselectedStyling();

		homeContent.className = "home-content visible";
		infoContent.className = "info-content hidden";
		contactContent.className = "contact-content hidden";
	}
}

function infoSelected() {
	if (infoIcon.className === "icon info") {
		infoSelectedStyling();
		homeUnselectedStyling();
		contactUnselectedStyling();

		homeContent.className = "home-content hidden";
		infoContent.className = "info-content visible";
		contactContent.className = "contact-content hidden";

	}
}

function contactSelected() {
	if (contactIcon.className === "icon contact") {
		contactSelectedStyling();
		homeUnselectedStyling();
		infoUnselectedStyling();

		homeContent.className = "home-content hidden";
		infoContent.className = "info-content hidden";
		contactContent.className = "contact-content visible";
	}
}

function homeSelectedStyling() {
	homeIcon.classList.add("selected");
	mobileHomeIcon.classList.add("selected");
	homeFontIcon.innerHTML = '&#xe905;';
	mobileHomeFontIcon.innerHTML = '&#xe905;';
}

function homeUnselectedStyling() {
	homeIcon.classList.remove("selected");
    mobileHomeIcon.classList.remove("selected");
	homeFontIcon.innerHTML = '&#xe904;';
	mobileHomeFontIcon.innerHTML = '&#xe904;';
}

function infoSelectedStyling() {
	infoIcon.classList.add("selected");
	mobileInfoIcon.classList.add("selected");
	infoFontIcon.innerHTML = '&#xe907;';
	mobileInfoFontIcon.innerHTML = '&#xe907;';
}

function infoUnselectedStyling() {
	infoIcon.classList.remove("selected");
	mobileInfoIcon.classList.remove("selected");
	infoFontIcon.innerHTML = '&#xe906;';
	mobileInfoFontIcon.innerHTML = '&#xe906;';
}

function contactSelectedStyling() {
	contactIcon.classList.add("selected");
	mobileContactIcon.classList.add("selected");
	contactFontIcon.innerHTML = '&#xe90b;';
	mobileContactFontIcon.innerHTML = '&#xe90b;';
}

function contactUnselectedStyling() {
	contactIcon.classList.remove("selected");
	mobileContactIcon.classList.remove("selected");
	contactFontIcon.innerHTML = '&#xe90a;';
	mobileContactFontIcon.innerHTML = '&#xe90a;';
}