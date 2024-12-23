$(window).on("load", function () {
	//BTN HOVER

	const btn = document.querySelectorAll('.btn-hover')
	btn.forEach(function (item, index) {
		item.onmousemove = function (e) {
			const x = e.clientX - $('.btn-hover').eq(index).offset().left
			const y = e.pageY - $('.btn-hover').eq(index).offset().top

			item.style.setProperty('--x', x + 'px')
			item.style.setProperty('--y', y + 'px')
		}
	})


	// HERO
	setTimeout(function () {
		$('.header-title-span').each(function (index) {
			$(this).css('transition-delay', (index) * 0.25 + 's')
			$(this).addClass('active')
		})
	}, 1)
	setTimeout(function () {
		$('.hero-sub-span').each(function (index) {
			$(this).css('transition-delay', (index) * 0.1 + 's')
			$(this).addClass('active')
		})
	}, 1)
	setTimeout(function () {
		$('.hero__social.fade_out').addClass('fade_in')
	}, 1)
	$('.projects .projects__slide').each(function (index) {
		$(this).css('transition-delay', index * 0.2 + 's')
	})
	$('.people__slider .people__slide').each(function (index) {
		$(this).css('transition-delay', index * 0.1 + 's')
	})
	// GSAP SECOND SCREEN
	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray(".panel").forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: "top top",
			end: "100%",
			pin: true,
			pinSpacing: false
		});
	});

	// FADE-IN/OUT
	if ($(window).width() < 1024) {
		$(window).on('scroll', () => {
			$('.fade_out').each(function () {
				if ($(window).scrollTop() > $(this).offset().top - $(window).height() - 100) {
					$(this).addClass('fade_in')
				}
			})
		})
		$('.fade_out').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $(window).height() - 100) {
				$(this).addClass('fade_in')
			}
		})
	} else {
		$(window).on('scroll', () => {
			$('.fade_out').each(function () {
				if ($(window).scrollTop() > $(this).offset().top - $(window).height()) {
					$(this).addClass('fade_in')
				}
			})
		})
		$('.fade_out').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $(window).height()) {
				$(this).addClass('fade_in')
			}
		})
	}


	// HEADER SEARCH
	$('.header__search').on('click', () => {

		$('.header').removeClass('active')
		$('.mob').removeClass('active')
		$('body').removeClass('scroll')
		if ($(window).width() < 768) {
			$('.header').toggleClass('active_results')
			if ($('.header').hasClass('active_results')) {
				$('body').addClass('scroll')
			} else {
				$('body').removeClass('scroll')
			}

			$('.header').toggleClass('active_search')
		} else {
			$('.header').addClass('active_search')
		}
	})
	$('.header__search-full-close').on('click', () => {
		$('.header').removeClass('active_search')
		$('body').removeClass('scroll')
		$(".header__search-full-input").val('')
		$('.header').removeClass('active_results')
		if ($(window).scrollTop() < $('header').height()) {
			$('.header').removeClass('scroll')
		}
	})
	document.querySelector('html').addEventListener('click', function (e) {
		if (e.target.closest('.header')) {

		} else {
			document.querySelector('.header').classList.remove('active_results')
			document.querySelector('.header').classList.remove('active_search')
			document.querySelector('.header__search-full-input').value = ''
		}
	})
	$('html').on('keyup', () => {
		if ($('.header__search-full-input').val() !== '') {
			$('.header').addClass('active_results')
			if ($(window).width() < 768) {
				$('body').addClass('scroll')
			}
		}
	})

	// HEADER SCROLL
	$(window).on('scroll', () => {
		if ($('.header').height() <= $(window).scrollTop()) {
			$('.header').addClass('scroll')
		} else {
			$('.header').removeClass('scroll')
		}
	})
	if ($('.header').height() <= $(window).scrollTop()) {
		$('.header').addClass('scroll')
	} else {
		$('.header').removeClass('scroll')
	}
	// const header = $('.header')
	// var lastScrollTop = 0, delta = 15;
	// $(window).scroll(function(event){
	// 	var st = $(this).scrollTop();
	// 	if(Math.abs(lastScrollTop - st) <= delta)
	// 		return;
	// 	if ((st > lastScrollTop) && (lastScrollTop>0)) {
	// 		header.addClass('hide')
	// 	} else {
	// 		$('.header').removeClass('hide')
	// 	}
	// 	lastScrollTop = st;
	// });

	//SWIPER PROJECTS
	const projectsSwiper = new Swiper('.projects__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		navigation: {
			nextEl: '.projects-next',
			prevEl: '.projects-prev',
		},
		autoplay: {
			delay: 5000,
		},
		pauseOnMouseEnter: true,
		speed: 1000,
		pagination: {
			el: ".projects__pagination",
			type: "fraction",
		},
		breakpoints: {
			1023: {
				slidesPerView: 3
			},
			767: {
				slidesPerView: 2,
			}
		}
	});


	//SWIPER PEOPLE
	const peopleSwiper = new Swiper('.people__slider', {
		slidesPerView: 2,
		navigation: {
			nextEl: '.people-next',
			prevEl: '.people-prev',
		},
		autoplay: {
			delay: 5000,
		},
		autoHeight: true,
		pauseOnMouseEnter: true,
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: ".people__pagination",
			type: "fraction",
		},
		breakpoints: {
			1280: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});

	//SCROLL LINKS
	$('a[href^="#"]').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 1000);
		return false;
	});

	//SCROLL BTN
	$(window).on('scroll', () => {
		if ($(window).scrollTop() >= $(window).height()) {
			$('.scroll-btn').addClass('active')
		} else {
			$('.scroll-btn').removeClass('active')
		}
	})
	if ($(window).scrollTop() >= $(window).height()) {
		$('.scroll-btn').addClass('active')
	} else {
		$('.scroll-btn').removeClass('active')
	}

	$('.header__burger').on('click', () => {
		$('.header').toggleClass('active')
	})
	const benefitsSwiper = new Swiper('.benefits__items-wrapper', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		speed: 800,
		pagination: {
			el: '.benefits__pagination',
			clickable: true,
		},
		breakpoints: {
			1023: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			}
		}
	})


	//GENERATE DOTS PEOPLE
	console.log()

	for (let i = 0; i < $('.people .swiper-pagination-total').text(); i++) {
		if (i === 0) {
			$(".people__dots").append("<span class='people-dot active'></span>");
		} else {
			$(".people__dots").append("<span class='people-dot'></span>");
		}
	}
	peopleSwiper.on('slideChange', () => {
		$('.people-dot').removeClass('active')
		$('.people-dot').eq(peopleSwiper.realIndex).addClass('active')
	})
	$('.people-dot').each(function (index) {
		$(this).on('click', () => {
			peopleSwiper.slideTo(index)
		})
	})

	for (let i = 0; i < $('.projects .swiper-pagination-total').text(); i++) {
		if (i === 0) {
			$(".projects__dots").append("<span class='projects-dot active'></span>");
		} else {
			$(".projects__dots").append("<span class='projects-dot'></span>");
		}
	}
	projectsSwiper.on('slideChange', () => {
		$('.projects-dot').removeClass('active')
		$('.projects-dot').eq(projectsSwiper.realIndex).addClass('active')
	})
	$('.projects-dot').each(function (index) {
		$(this).on('click', () => {
			projectsSwiper.slideTo(index)
		})
	})


	const mobTop = document.querySelectorAll('.mob-drop-top')
	const mobBot = document.querySelectorAll('.mob-drop-bot')

	mobTop.forEach(function (item, index) {
		let height = mobBot[index].clientHeight
		mobBot[index].style.maxHeight = '0px'
		item.addEventListener('click', () => {
			item.classList.toggle('active')
			mobBot[index].classList.toggle('active')
			if (item.classList.contains('active')) {
				mobBot[index].style.maxHeight = height + 'px'
			} else {
				mobBot[index].style.maxHeight = '0px'
			}
		})
	})


	// let clickedDropdown = false
	//
	// $('.mob__link-dropdown .mob__link-top').each(function (index) {
	// 		 $(this).on('click', () => {
	//
	// 			 if (clickedDropdown === false) {
	// 				 clickedDropdown = true
	// 			 $('.mob__link-dropdown').eq(index).toggleClass('active')
	// 			 if ($('.mob__link-dropdown').eq(index).hasClass('active')) {
	// 				 $('.mob__links-bot').eq(index).slideDown()
	// 			 } else {
	// 				 $('.mob__links-bot').eq(index).slideUp()
	// 			 }
	// 				 setTimeout(function () {
	// 					 clickedDropdown = false
	// 				 }, 400)
	// 			 }
	//
	// 		 })
	// })

	$('.header__burger').on('click', () => {

		$('.mob').toggleClass('active')
		if ($('.header').hasClass('active_results')) {

		} else if ($('.mob').hasClass('active')) {
			$('body').addClass('scroll')
		} else {
			$('body').removeClass('scroll')
		}

		$('.header').removeClass('active_results')
		$('.header').removeClass('active_search')
		if ($('.header').hasClass('active')) {
			$('.header').addClass('scroll')
		} else {
			if ($(window).scrollTop() < $('.header').height()) {
				$('.header').removeClass('scroll')
			}

		}

	})

	$(window).on('scroll', () => {
		$('.header').removeClass('active_results')
		$('.header').removeClass('active_search')
	})


	projectsSwiper.autoplay.stop();
	if ($('.projects__slider').length) {
		$(window).on('scroll', () => {
			if ($(window).scrollTop() >= $('.projects__slider').offset().top - ($(window).height() / 2)) {
				projectsSwiper.autoplay.start();
			}
		})
	}


	peopleSwiper.autoplay.stop();
	if ($('.people__slider').length) {
		$(window).on('scroll', () => {
			if ($(window).scrollTop() >= $('.people__slider').offset().top - ($(window).height() / 2)) {
				peopleSwiper.autoplay.start();
			}
		})
	}




	//ABOUT
	//ABOUT
	//ABOUT

	const industrySwiper = new Swiper('.industry__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		navigation: {
			nextEl: '.industry-next',
			prevEl: '.industry-prev',
		},
		pauseOnMouseEnter: true,
		speed: 1000,
		pagination: {
			el: ".industry__pagination",
			type: "fraction",
		},
		breakpoints: {
			1024: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2,
			}
		}
	});

	$('.experts .people__slide').each(function (index) {
		$(this).css('transition-delay', index * 0.05 + 's')
	})

	$('.industry .industry__slide').each(function (index) {
		$(this).css('transition-delay', index * 0.1 + 's')
	})

	for (let i = 0; i < $('.industry .swiper-pagination-total').text(); i++) {
		if (i === 0) {
			$(".industry__dots").append("<span class='industry-dot active'></span>");
		} else {
			$(".industry__dots").append("<span class='industry-dot'></span>");
		}
	}
	industrySwiper.on('slideChange', () => {
		$('.industry-dot').removeClass('active')
		$('.industry-dot').eq(industrySwiper.realIndex).addClass('active')
	})
	$('.industry-dot').each(function (index) {
		$(this).on('click', () => {
			industrySwiper.slideTo(index)
		})
	})

	if ($('.story__more').length) {
		document.querySelector('.story__more').addEventListener('click', () => {
			document.querySelector('.story__text-wrapper').classList.toggle('active')
			if (document.querySelector('.story__text-wrapper').classList.contains('active')) {
				document.querySelector('.story__col-all').style.maxHeight = document.querySelector('.story__text').scrollHeight + 'px'
				$('.story__more .btn-text').text($('.story__more').attr('data-less'))
			} else {
				document.querySelector('.story__col-all').style.maxHeight = 0 + 'px'
				$('.story__more .btn-text').text($('.story__more').attr('data-more'))
			}
		})
	}


	//PROJECTS
	//PROJECTS
	//PROJECTS
	$('.our .projects__slide').each(function (index) {
		$(this).css('transition-delay', index * 0.1 + 's')
	})


	//PROJECT
	//PROJECT
	//PROJECT
	var publicSwiper = new Swiper(".public__slider", {
		slidesPerView: 1,
		grid: {
			rows: 2,
			fill: 'row',
		},
		speed: 800,
		spaceBetween: 30,
		pagination: {
			el: ".public__pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.public-next',
			prevEl: '.public-prev'
		},
		breakpoints: {
			768: {
				slidesPerView: 2,

			}
		}
	});
	for (let i = 0; i < $('.public .swiper-pagination-total').text(); i++) {
		if (i === 0) {
			$(".public__dots").append("<span class='public-dot active'></span>");
		} else {
			$(".public__dots").append("<span class='public-dot'></span>");
		}
	}
	publicSwiper.on('slideChange', () => {
		$('.public-dot').removeClass('active')
		$('.public-dot').eq(publicSwiper.realIndex).addClass('active')
	})
	$('.public-dot').each(function (index) {
		$(this).on('click', () => {
			publicSwiper.slideTo(index)
		})
	})
	//INVESTORS
	//INVESTORS
	//INVESTORS


	$('.invest__item-bot').eq(0).slideDown()
	let investClick = false
	$('.invest__item-top').each(function (index) {
		$(this).on('click', () => {
			if (investClick === false) {
				$('.invest__item').eq(index).toggleClass('active')
				if ($('.invest__item').eq(index).hasClass('active')) {
					$('.invest__item-bot').eq(index).slideDown()
				} else {
					$('.invest__item-bot').eq(index).slideUp()
				}
				investClick = true
				setTimeout(function () {
					investClick = false
				}, 400)
			}

		})
	})


	//ARTICLE
	//ARTICLE
	//ARTICLE

	let faqClick = false
	$('.faq__item-top').each(function (index) {
		$(this).on('click', () => {
			if (faqClick === false) {
				$('.faq__item').eq(index).toggleClass('active')
				if ($('.faq__item').eq(index).hasClass('active')) {
					$('.faq__item-bot').eq(index).slideDown()
				} else {
					$('.faq__item-bot').eq(index).slideUp()
				}
				faqClick = true
				setTimeout(function () {
					faqClick = false
				}, 400)
			}

		})

	})



	//GALLERY
	//GALLERY
	//GALLERY

	var gal1 = new Swiper(".gal-1", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 1500,
		navigation: {
			nextEl: '.gal-next-1',
			prevEl: '.gal-prev-1',
		},
		pagination: {
			el: '.gal-pagination-1',
			type: 'fraction'
		},
		touch: false
	});

	var gal2 = new Swiper(".gal-2", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 1500,
		navigation: {
			nextEl: '.gal-next-2',
			prevEl: '.gal-prev-2',
		},
		pagination: {
			el: '.gal-pagination-2',
			type: 'fraction'
		},
		touch: false
	});

	var gal3 = new Swiper(".gal-3", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 1500,
		navigation: {
			nextEl: '.gal-next-3',
			prevEl: '.gal-prev-3',
		},
		pagination: {
			el: '.gal-pagination-3',
			type: 'fraction'
		},
		touch: false
	});

	var gal4 = new Swiper(".gal-4", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 1500,
		navigation: {
			nextEl: '.gal-next-4',
			prevEl: '.gal-prev-4',
		},
		pagination: {
			el: '.gal-pagination-4',
			type: 'fraction'
		},
		touch: false
	});

	var gal5 = new Swiper(".gal-5", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 1500,
		navigation: {
			nextEl: '.gal-next-5',
			prevEl: '.gal-prev-5',
		},
		pagination: {
			el: '.gal-pagination-5',
			type: 'fraction'
		},
		touch: false
	});



	//SEARCH
	//SEARCH
	//SEARCH
	$(window).on('keyup', () => {
		if ($('.search-input').length) {
			$('.search-text-from-input').text($('.search-input').val())
		}
	})
	$('.search__close-input').on('click', () => {
		$('.search-text-from-input').text('')
		$('.search-input').val('')
	})



	//CAREERS
	//CAREERS
	//CAREERS


	let carClicked = false
	$('.car__item-top').each(function (index) {
		$(this).on('click', () => {
			if (carClicked === false) {
				$('.car__item').eq(index).toggleClass('active')
				if ($('.car__item').eq(index).hasClass('active')) {
					$('.car__item-bot-wrapper').eq(index).slideDown()
				} else {
					$('.car__item-bot-wrapper').eq(index).slideUp()
				}
				carClicked = true
				setTimeout(function () {
					carClicked = false
				},400)
			}

		})
	})



	$('.car__tab-btn').each(function () {
		$(this).on('click', () => {
			$('.car__tab-btn').removeClass('active')
			$(this).addClass('active')
			if($(this).attr('data-car') === '1'){
				$('.car_tab').show()
			} else {
				$('.car_tab').hide()
				$(`.car_tab[data-car=${$(this).attr('data-car')}]`).show()
			}
		})
	})


	//CONTACT FORM
	//CONTACT FORM
	//CONTACT FORM
	$(window).on('keyup', () => {
		$('.input').each(function (index) {
			if ($(this).val() === '') {
				$('.contact__label span').eq(index).css('transform', 'translateY(0)')
				if ($(window).width >= 1279) {
					$('.contact__label span').eq(index).css('left', '20px')
				} else if ($(window).width <= 1279) {
					$('.contact__label span').eq(index).css('left', '10px')
				}
			} else {
				$('.contact__label span').eq(index).css('transform', 'translateY(-30px)')
				$('.contact__label span').eq(index).css('left', '0')
			}
			if ($(this).val() !== '') {
				$('.contact__label').eq(index).removeClass('err')
			}
		})
	})
	//POP
	//POP
	//POP

	$('.open-pop-contact').on('click', () => {
		$('.pop_contact').addClass('active')
		$('body').addClass('scroll')
	})
	$('.open-pop-vacancy').on('click', () => {
		$('.pop_vacancy').addClass('active')
		$('body').addClass('scroll')
	})
	$('.pop .bg').each(function (index) {
		$(this).on('click', () => {
			$('.pop').eq(index).removeClass('active')
			$('body').removeClass('scroll')
		})
	})
	$('.pop .pop__close').each(function (index) {
		$(this).on('click', () => {
			if ($('.mob').hasClass('active')) {
			} else {
				$('body').removeClass('scroll')
			}
			$('.pop').eq(index).removeClass('active')
		})
	})
	$('.close-pop-thanks').on('click', () => {
		if ($('.mob').hasClass('active')) {

		} else {
			$('body').removeClass('scroll')
		}
		$('.pop_thanks').removeClass('active')
	})
})
if ($('#select2').length) {
	$(document).ready(function() {
		$('.js-example-basic-single').select2();
	});
	$('#select2').on('select2:select', function (e) {
		let selectedValue = e.params.data.element.dataset.car;

		if(selectedValue === '1') {
			$('.car_tab').show()
		}
		else{
			$('.car_tab').hide()
			$(`.car_tab[data-car=${selectedValue}]`).show();
		}
	});
}


// about

$(window).on('scroll', () => {
	$('.around__item').each(function (index) {
		if ($(window).scrollTop() >= $(this).offset().top - $(window).height()/2) {
			$(this).parents('.around').addClass(`scrolled-${index}`)
		} else {
			$(this).parents('.around').removeClass(`scrolled-${index}`)
		}
	})
})

$('.around__item').each(function (index) {
	if ($(window).scrollTop() >= $(this).offset().top - $(window).height()/2) {
		$(this).parents('.around').addClass(`scrolled-${index}`)
	} else {
		$(this).parents('.around').removeClass(`scrolled-${index}`)
	}
})





















