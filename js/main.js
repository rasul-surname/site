// Preloader
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
	setTimeout(() => {
		mask.remove();
	}, 600)
})

// Бургер меню + появляющийся header при скролле
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__link, .header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.header').addClass('fixed');
			$('.header__contacts').addClass('del');
		}
		else if ($(this).scrollTop() < 150) {
			$('.header').removeClass('fixed');
		}
	});
});

// Плавное перемещение по ссылке
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};

// Добавление фильтра
const codeBox = document.querySelectorAll('.code');
const filterBox = document.querySelectorAll('.projects__card');
const projectNames = document.querySelectorAll('.project__name');



filterBox.forEach(elem => {
	elem.classList.add('hide');

	if(elem.classList.contains('react')) {
		elem.classList.remove('hide');
	}
})

// Скрыл проекты больше 6
for(let i = 0; i < codeBox.length; i++) {
	if(i > 5) {
		codeBox[i].classList.add('more');
	} 
}

document.querySelector('.project__names').addEventListener('click', (event) => {
	if(event.target.tagName !== 'LI') return false;

	// Получил класс для фильтров
	let filterClass = event.target.dataset['f'];

	// Добавление и удаление класса active для фильтров
	projectNames.forEach(elem => {
		elem.classList.remove('active');
	})
	event.target.classList.add('active');
	
	// Фильтрация
	filterBox.forEach(elem => {
		elem.classList.remove('hide');

		elem.classList.remove('more');
		if(!elem.classList.contains(filterClass)) {
			elem.classList.add('hide');
		}
	});
})

// Выпадающие проекты
// let projectbtn = document.querySelector('.skills__btn');
// let mores = document.querySelectorAll('.more');

// projectbtn.addEventListener('click', function() {
// 	for(let i = 0; i < mores.length; i++) {
// 		mores[i].style.display = 'block';
// 	}
// 	this.style.display = 'none';
// })

// Background intro
if (document.documentElement.clientWidth > 300) {
	VANTA.NET({
		el: "#intro",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0xEF0D33,
		backgroundColor: 0x0A0A0A
	})
}



