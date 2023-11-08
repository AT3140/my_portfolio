const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

//Adding Rating
var form = document.querySelector()
document.addEventListener('submit', function (event) {

	// Only run our code on .rating forms
	if (!event.target.matches('.rating')) return;

	// Prevent form from submitting
	event.preventDefault();

	// Get the selected star
	var selected = document.activeElement;
	if (!selected) return;
	var selectedIndex = parseInt(selected.getAttribute('data-star'), 10);

	// Get all stars in this form (only search in the form, not the whole document)
	// Convert them from a node list to an array
	// https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
	var stars = Array.from(event.target.querySelectorAll('.star'));

	// Loop through each star, and add or remove the `.selected` class to toggle highlighting
	stars.forEach(function (star, index) {
		if (index < selectedIndex) {
			// Selected star or before it
			// Add highlighting
			star.classList.add('selected');
		} else {
			// After selected star
			// Remove highlight
			star.classList.remove('selected');
		}
	});

	// Remove aria-pressed from any previously selected star
	var previousRating = event.target.querySelector('.star[aria-pressed="true"]');
	if (previousRating) {
		previousRating.removeAttribute('aria-pressed');
	}

	// Add aria-pressed role to the selected button
	selected.setAttribute('aria-pressed', true);

}, false);

// Highlight the hovered or focused star
var highlight = function (event) {

	// Only run our code on .rating forms
	var star = event.target.closest('.star');
	var form = event.target.closest('.rating');
	if (!star || !form) return;

	// Get the selected star
	var selectedIndex = parseInt(star.getAttribute('data-star'), 10);

	// Get all stars in this form (only search in the form, not the whole document)
	// Convert them from a node list to an array
	// https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
	var stars = Array.from(form.querySelectorAll('.star'));

	// Loop through each star, and add or remove the `.selected` class to toggle highlighting
	stars.forEach(function (star, index) {
		if (index < selectedIndex) {
			// Selected star or before it
			// Add highlighting
			star.classList.add('selected');
		} else {
			// After selected star
			// Remove highlight
			star.classList.remove('selected');
		}
	});

};

// Listen for hover and focus events on stars
document.addEventListener('mouseover', highlight, false);
document.addEventListener('focus', highlight, true);

// Reset highlighting after hover or focus
var resetSelected = function (event) {

	// Only run our code on .rating forms
	if (!event.target.closest) return;
	var form = event.target.closest('.rating');
	if (!form) return;

	// Get all stars in this form (only search in the form, not the whole document)
	// Convert them from a node list to an array
	// https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
	var stars = Array.from(form.querySelectorAll('.star'));

	// Get an existing rating if there is one
	var selected = form.querySelector('.star[aria-pressed="true"]');
	var selectedIndex = selected ? parseInt(selected.getAttribute('data-star'), 10) : 0;

	// Loop through each star, and add or remove the `.selected` class to toggle highlighting
	stars.forEach(function (star, index) {
		if (index < selectedIndex) {
			// Selected star or before it
			// Add highlighting
			star.classList.add('selected');
		} else {
			// After selected star
			// Remove highlight
			star.classList.remove('selected');
		}
	});

};

// Reset selected on mouse off and blur
document.addEventListener('mouseleave', resetSelected, true);
document.addEventListener('blur', resetSelected, true);


