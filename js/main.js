// Import vendor jQuery plugin example (not module)
// import $ from '~/app/libs/jquery/jquery.min.js';
// import $ from 'jquery'
// window.jQuery = $;
// window.$ = $;
// console.log($)

// Swiper----------------------------
// import Swiper, { Navigation, Mousewheel } from 'swiper';
// Swiper.use([Navigation, Mousewheel]);

// Lazysizes--------------------------
// import 'lazysizes'; //основной скрипт

// import a plugin
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
// require ('~/app/libs-vanilla/service-functions/ibg-class.js');

//- remove-class--------------------------
// import {removeClass} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- siblings--------------------------
// import {siblings} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeIn--------------------------
// import {fadeIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeToggle--------------------------
// import {fadeToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideIn--------------------------
// import {slideIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideOut--------------------------
// import {slideOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideToggle--------------------------
// import {slideToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- ScrollTabs--------------------------
// import {ScrollTabs} from '~/app/libs-vanilla/service-functions/all-functions.js';
// new ScrollTabs();

//- theme-switcher --------------------------
// Для переключения цвет. схемы нужны 2 кнопки, с классами .switcher и .reset
// Для .reset нужно изначально задать display: none, а при добавлении класса .active установить для него display: block
// сама тема меняется добавлением к <html> тегу классов dark & light.
// в соответствии с этими классами нужно менять иконки Луны и Солнца
// Работающий пример: all layout/FarmDev
// require('~/app/libs-vanilla/service-functions/theme-switcher.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- multilevel-panel--------------------------
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- isMobile--------------------------
// import {isMobile} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- scrollDisable(надежное отключение скролла на ios--------------------------
// import scrollDisabler from '~/app/libs-vanilla/service-functions/scrollDisable.js'

//- scrollWidth(фикс прыгания стр-цы. при открытии модалки--------------------------
require ('~/app/libs-vanilla/service-functions/scrollWidth.js');

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- ScrollTabs (прокрутка длинных табов на моббильных экранах)-------------------------- 
// import {ScrollTabs} from '~/app/libs-vanilla/service-functions/all-functions.js';
// new ScrollTabs();

// import {multiDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';//
// if(document.querySelectorAll('[data-dropdowned]') != null){
// 	multiDropdown();
// }

//- singleDropdown--------------------------
// import {singleDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';
// if(document.querySelectorAll('[data-single-dropdown]') != null){
// 	singleDropdown();
// }


//- WITH JQUERY===================================

//- jquery-UI--------------------------Не проверено!
// require('~/app/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// const dlmenu = require('~/app/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// const magnificPopup = require('~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('~/app/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('~/app/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('~/app/libs/superfish/dist/js/hoverIntent.js')
// require('~/app/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
// require('~/app/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('~/app/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('~/app/libs-vanilla/multilevel-dropdown/multidropdown.js')

//- accordion--------------------------
// require('~/app/libs-vanilla/accordion/vanilla-accordion.js')

//- spoilers-------------------------
// require('~/app/libs-vanilla/spoilers/spoilers.js')
	
//- tabs--------------------------
// require('~/app/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('~/app/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// var MicroModal = require('~/app/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// const Swiper = require('~/app/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------
import {tns} from '~/app/libs-vanilla/tiny-slider/dist/tiny-slider.js';

//- wNumb--------------------------
// var wNumb = require('~/app/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('~/app/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('~/app/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('~/app/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('~/app/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/scroll-to-sects/scrolltosect.js';

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE: new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('~/app/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('~/app/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('~/app/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')

//- VenoBox--------------------------
var VenoBox = require('~/app/libs-vanilla/VenoBox/dist/venobox.js')

//- GraphModal--------------------------
require('/app/libs-vanilla/graph-modal/dist/graph-modal.min.js')

//- ScrollTrigger--------------------------
import ScrollTrigger from '~/app/libs-vanilla/scrollTrigger/ScrollTrigger.js';

//- end VANILLA JS===================================

// jQuery(document).ready(function() {
// 	console.log('jQuery document ready');

// });

// console.log(magnificPopup)

document.addEventListener('DOMContentLoaded', () => {
	// mob. menu close/open
	if(document.getElementById('burger') !== null){
		const burger = document.getElementById('burger');

		burger.addEventListener('click', (e) => {
			burger.classList.toggle('on');
			document.documentElement.classList.toggle('menu-opened');
			document.documentElement.classList.toggle('lock');
		});	
	}

	function mobMenuClose() {
		burger.classList.remove('on');
		document.documentElement.classList.remove('menu-opened');
		document.documentElement.classList.remove('lock');
	}
	// END mob. menu close/open

	// usage: http://ganlanyuan.github.io/tiny-slider/#usage
	if(document.querySelector('.tiny-sldr') !== null){
		var slider = tns({
			container: '.tiny-sldr',
				mode: 'gallery', //'gallery' - для фэйд-анимации отдельных слайдов
				items: 1,
				slideBy: 1, // кол-во слайдов, перематывающихся за 1 клик. Не работает с mode: 'gallery'
				autoplay: true,
				controls: false, // отключение кнопок "вперед/назад"
				nav: false, //отключение bullets
				autoplayButtonOutput: false // убрать кнопку Stop из html
			});
	}

	if(document.querySelector('[data-trigger]')){
		const trigger = new ScrollTrigger( {
			trigger: {
				once: false,
				toggle: {
	            // The class(es) that should be toggled
					class: {
	                in: 'visible', // Either a string, or an array of strings
	                out: ['invisible']
	            },
	            callback: {
	                // A callback when the element is going in the viewport, you can
	                // return a Promise here, the trigger will not be called until
	                // the promise resolves.
	            	in: (trigger) => {
	            		// console.log('in!');
	            		// console.log(trigger);
	            		const targets = trigger.element.querySelectorAll('[data-percentage]');
	     
	            		[...targets].forEach(target => {
	            			// console.log(target)
	            			target.querySelector('[data-bar]').style.width = target.dataset.percentage + '%';
	            		});
	            	},
	                // A callback when the element is visible on screen, keeps
	                // on triggering for as long as 'sustain' is set
	            	visible: null,
	                // A callback when the element is going out of the viewport.
	                // You can also return a promise here, like in the 'in' callback.
	                //
	                // Here an example where all triggers take 10ms to trigger
	                // the 'out' class.
	            	
	            	// out: (trigger) => {
	            	// 	console.log('out!');
	            	// 	console.log(trigger);
	                //     // `trigger` contains the Trigger object that goes out
	                //     // of the viewport
	            	// 	return new Promise((resolve, reject) => {
	            	// 		setTimeout(resolve, 10)
	            	// 	})
	            	// }
	            }
	        }

	    }
        }); // When not using npm, create a new instance with 'new ScrollTrigger.default()'
				// Add all html elements with attribute data-trigger
		trigger.add('[data-trigger]');
	}

	// VenoBox modal
	if(document.querySelector('.serveces-modal') !== null){
		var serviceGallery = new VenoBox({
			selector: '.serveces-modal',
			spinner: 'rotating-plane',
			fitView: true,
			// maxWidth: '44.53%',
			onPreOpen: function(obj){
				document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
			},
			onPostOpen: function(obj, gallIndex, thenext, theprev){

			},
			onPreClose: function(obj, gallIndex, thenext, theprev){
				document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
			}
		});
	}

	// if(document.querySelector('.callback') !== null){
	// 	var callbackBox = new VenoBox({
	// 		selector: '.callback',
	// 		customClass: 'callback-form',
	// 		bgcolor: 'transparent',
	// 		onPreOpen: function(obj){
	// 			document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
	// 			// console.log(obj)
	// 		},
	// 		onPostOpen: function(obj, gallIndex, thenext, theprev){
	// 			document.querySelector('.callback-form').querySelector('[data-modal-close]').addEventListener('click', callbackModalClose);
	// 	    },
	// 		onPreClose: function(obj, gallIndex, thenext, theprev){
	// 			document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
	// 			document.querySelector('.callback-form').querySelector('[data-modal-close]').removeEventListener('click', callbackModalClose);
	// 		}
	// 	});
		
	// 	function callbackModalClose(e) {
	// 		callbackBox.close();
	// 	}
	// }

	if(document.querySelector('.overal-modal') !== null){
		var overallBox = new VenoBox({
			selector: '.overal-modal',
			fitView: true,
			onPreOpen: function(obj){
				document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
			},
			onPreClose: function(obj, gallIndex, thenext, theprev){
				document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
			}
		});
	}
	// End VenoBox modal

	// callback modal
	const callbackModal = new GraphModal({
		isOpen: (modal) => {
			// document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
		},
		isClose: () => {
			console.log('closed');
			// document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
		}
	});
	document.querySelector('[data-callback-open]').addEventListener('click', () => {
		callbackModal.open('first');
	});
	// End callback modal

	// click on services link
		[...document.querySelectorAll('[data-menu-close]')].forEach(item => {
			item.onclick = (e) => mobMenuClose();
		});

		[...document.querySelectorAll('[data-scroll-services]')].forEach(item => {
			item.onclick = (e) => {
				mobMenuClose();
				scrollToServices();
			}
		});

	// End click on services link

	// Scroll to specific values
	if(document.querySelector('#scroll-to-services') !== null && document.getElementById('services') !== null){
		document.getElementById('scroll-to-services').onclick = (e) => {
			scrollToServices();
		}
	}
	function scrollToServices() {
		window.scroll({
			top: document.getElementById('services').offsetTop - (document.getElementById('header-fixed').offsetHeight + 15), 
			left: 0, 
			behavior: 'smooth'
		});
		setTimeout(() => overallBox.open(document.querySelector('.overal-modal')), 1000);
	}
		

}); //DOMContentLoaded