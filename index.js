// nav toogle
function navToggle() {
	var navToggleBtn = document.getElementById("nav-toggle");
	var navToggleUl = document.getElementById("nav-link");
	navToggleBtn.classList.toggle("nav-toggle--active");
	navToggleUl.classList.toggle("nav-link--active");
}

// nav fixed top when scroll >= 300
var scrollPosition = window.scrollY;
var navContainer = document.getElementById('nav');
window.addEventListener('scroll', function () {
	scrollPosition = window.scrollY;
	if (scrollPosition >= 300) {
		navContainer.classList.add('nav--fixed');
	} else {
		navContainer.classList.remove('nav--fixed');
	}
});

// portfolio list toggle more or less
function portfolioListToggle() {
	var portfolioList = document.getElementById("portfolio__list");
	if (portfolioList.classList.toggle("portfolio__list--red")) {
		document.getElementById("portfolio__list-toggle").innerHTML = "Show less";
	} else {
		document.getElementById("portfolio__list-toggle").innerHTML = "Show more";
	}
	InitializeLink()
}

// scroll to section => nav link active
function InitializeLink() {
	var section = document.getElementsByTagName("section");
	var sections = {};
	var i = 0;
	Array.prototype.forEach.call(section, function (e) {
		sections[e.id] = e.offsetTop;
	});
	window.onscroll = function () {
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		for (i in sections) {
			if (sections[i] <= scrollPosition) {
				document.querySelector('.link--active').setAttribute('class', '');
				document.querySelector('a[data-href*=' + i + ']').setAttribute('class', 'link--active');
			}
		}
	};
};
window.onresize = () => {
	InitializeLink()
}
InitializeLink()

// current year for footer copyright
document.getElementById("year").innerHTML = new Date().getFullYear();


// dark-mode toogle
function darkmodeToggle() {
	var navToggleBtn = document.getElementById("html");
	if (navToggleBtn.classList.toggle("html--darkmode")) {
		document.getElementById("dark-mode__icon").classList.toggle("icon-dark_mode");
	} else {
		document.getElementById("dark-mode__icon").classList.remove("icon-dark_mode");
	}
}

// scroll to section anchor
function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({
		behavior: 'smooth'
	});
}

// set height to first section = 100 height window browser
(function init100vh(){
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
