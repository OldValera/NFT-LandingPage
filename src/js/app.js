import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel,
} from 'swiper';
import AOS from 'aos';


flsFunctions.isWebp();
import burger from './modules/burger.js'
const footerMainContainer = document.querySelector(".footer__inner")
const footerMediaContainer = document.querySelector(".media")
const footerText = document.querySelector(".footer__rights")



function moveContainer(){

	if (window.innerWidth <= 1000) {
		footerMainContainer.appendChild(footerMediaContainer);
		footerMainContainer.appendChild(footerText);
	  }
}
moveContainer();




const swiper = () => {
	new Swiper('.slider', {
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1' // Включить стрелочки
		},
		modules: [Navigation, FreeMode], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 3, // Количество слайдов которые будут видны,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}


const swiper2 = () => {
	new Swiper('.popular-slider', {
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2' // Включить стрелочки
		},
		modules: [Navigation, FreeMode], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 2, // Количество слайдов которые будут видны,
		spaceBetween: 36, //15?
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 2
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

const swiper3 = () => {
	new Swiper('.explore__slider', {
		navigation: {
			nextEl: '.swiper-button-next3',
			prevEl: '.swiper-button-prev3' // Включить стрелочки
		},
		modules: [Navigation, FreeMode], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 1, // Количество слайдов которые будут видны,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			700: {
				slidesPerView: 2
			}
		}
	});
}

function detectDevice() {
	if (window.innerWidth < 600) {
		for (let i = 0; i <= 2; i++) {
			document.querySelectorAll('.slider__item')[i].style.display = 'block';
			document.querySelectorAll('.popular__item')[i].style.display = 'block';
			document.querySelectorAll('.explore__slider-item')[i].style.display = 'block';
		}
	} else {
		swiper();
		swiper2();
		swiper3();
	}
}

detectDevice();





AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});