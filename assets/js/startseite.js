//
// Sticky Menu
//
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header.header').addClass("sticky");
        $('header.header_mobile').addClass("mobile-sticky");
        $('.hero-mobile-logo-container').addClass('hide');
    }
    else{
        $('header.header').removeClass("sticky");
        $('header.header_mobile').removeClass("mobile-sticky");
        $('.hero-mobile-logo-container').removeClass('hide');
    }
});



//
//  Mobile Menu fixes
//
function menuIsOpened() {
	$('.header_mobile .w-nav-button').click(function() {
  	if($(this).hasClass('w--open')) {
      $('.header_mobile .mobile-header-right').removeClass('hideFromView');
  	} else {
    	$('.header_mobile .mobile-header-right').addClass('hideFromView');
    }
  });
  
  $('.header_mobile .w-nav-menu .w-nav-link').click(function() {
  
  	console.log('closed menu because of a link click');
  	$('.header_mobile .mobile-header-right').removeClass('hideFromView');
 
  });
	
}
menuIsOpened();



//
//  Featured Carousel
//
function logos() {

    let splides = $('#featured-carousel');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            perPage: 4,
            arrows: false,
            pagination: false,
            //focus: 'center',
            direction: 'ltr',
            gap: '35px',
            type: 'loop',
            drag: false,
            autoScroll: {
                autoStart: true,
                speed: 0.8,
                pauseOnHover: false,
                pauseOnFocus: false,
            },
            intersection: {
                inView: {
                    autoScroll: true,
                },
                outView: {
                    autoScroll: false,
                },
            },
            breakpoints: {
                1320: {
                    perPage: 5,
                },
                1080: {
                    perPage: 4,
                },
                768: {
                    perPage: 3,
                },
                425: {
                    perPage: 2,
                },
            }
        }).mount(window.splide.Extensions);
    }
}
featuredCarousel();



//
//  Logos
//
function logos() {

    let splides = $('#logo-carousel');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide(splides[ i ], {
            perPage: 4,
            arrows: false,
            pagination: false,
            //focus: 'center',
            direction: 'ltr',
            gap: '35px',
            type: 'loop',
            drag: false,
            autoScroll: {
                autoStart: true,
                speed: 0.8,
                pauseOnHover: false,
                pauseOnFocus: false,
            },
            intersection: {
                inView: {
                autoScroll: true,
                },
                outView: {
                autoScroll: false,
                },
            },
            breakpoints: {
                1320: {
                    perPage: 5,
                },
                1080: {
                    perPage: 4,
                },
                768: {
                    perPage: 3,
                },
                425: {
                    perPage: 2,
                },
            }
        }).mount( window.splide.Extensions );
    }
}
logos();



// 
//  Logos Mobile
//
function logosStartMobile() {

    let splides = $('#logo-carousel-mobile');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
            perPage: 4,
            arrows: false,
            pagination: false,
            //focus: 'center',
            direction: 'ltr',
            gap: '35px',
            type: 'loop',
            drag: false,
            autoScroll: {
            autoStart: true,
            speed: 0.8,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        intersection: {
            inView: {
                autoScroll: true,
            },
            outView: {
                autoScroll: false,
            },
        },
        breakpoints: {
            1320: {
                perPage: 5,
            },
            1080: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            425: {
                perPage: 2,
            },
        }
        }).mount( window.splide.Extensions );
    }
}
logosStartMobile();



//
// Home Cards
//
document.querySelector(".home-cards-container").removeAttribute("role");
document.querySelectorAll(".testimonial-card-item").forEach(trigger => { trigger.removeAttribute("role") });
document.querySelector(".swiper-slide").classList.add("cc-first");
const swiperEl = document.querySelector('.home-cards-swiper');
const swiper = new Swiper(swiperEl, {
    grabCursor: true,
    watchSlidesProgress: true,
    loop: true,
    speed: 550,
    loopedSlides: 5,
    slidesPerView: 'auto',
    centeredSlides: true,
    shortSwipes: false,

    navigation: {
        nextEl: '.home-cards-slider-btn-right',
        prevEl: '.home-cards-slider-btn-left',
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    on: {
        progress(swiper) {
            const scaleStep = 0.18;
            const zIndexMax = swiper.slides.length;

            for (let i = 0; i < swiper.slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const sliderCard = slideEl.querySelector('.home-slider-card');
                //const sliderVid = slideEl.querySelector("video");
                const slideProgress = swiper.slides[i].progress;
                const absProgress = Math.abs(slideProgress);
                var modify = 1;

                if (absProgress > 1.9) {
                    modify = (absProgress - 1.9) * 0.25 + 1;
                }

                const opacityEls = slideEl.querySelectorAll(
                    '.home-slider-card-innerr',
                );
                const translate = `${slideProgress * modify * 78}%`;
                const scale = 1 - absProgress * scaleStep;
                const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
                slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
                slideEl.style.zIndex = zIndex;

                if (absProgress > 2.5) {
                    sliderCard.style.display = "none";
                } else {
                    sliderCard.style.display = "block";
                }

                opacityEls.forEach((opacityEl) => {
                    opacityEl.style.opacity = 1 - absProgress;
                });
            }
        },
        setTransition(swiper, duration) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const opacityEls = slideEl.querySelectorAll(
                    '.home-slider-card-inner',
                );
                slideEl.style.transitionDuration = `${duration}ms`;
                opacityEls.forEach((opacityEl) => {
                    opacityEl.style.transitionDuration = `${duration}ms`;
                });
            }
        },
    },
});

if (window.innerWidth < 479) {
    console.log("Test");
    swiper.params.shortSwipes = true;
}

setTimeout(() => {document.querySelector('.home-cards-wrap').classList.remove('loading');}, 2200);

$(window).on('load', function(){
    $('.home-slider-card-inner img').each(function(){
        $(this).removeAttr('sizes');
        $(this).removeAttr('srcset');
    });
});



//
// FAQ Accordion Settings
//
const accSettings = {
    speed: 300, // Animation speed
    oneOpen: true, // Close all other accordion items if true
    offsetAnchor: true, // Activate scroll to top for active item
    offsetFromTop: 180, // In pixels – Scroll to top at what distance
    scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top 
  
    classes: {
        accordion: 'js-accordion',
        header: 'js-accordion-header',
        item: 'js-accordion-item',
        body: 'js-accordion-body',
        icon: 'js-accordion-icon',
        active: 'active',
    }
};


const prefix = accSettings.classes

const accordion = (function(){
    const accordionElem = $(`.${prefix.accordion}`)
    const accordionHeader = accordionElem.find(`.${prefix.header}`)
    const accordionItem = $(`.${prefix.item}`)
    const accordionBody = $(`.${prefix.body}`)
    const accordionIcon = $(`.${prefix.icon}`)
    const activeClass = prefix.active
        
    return {
        // pass configurable object literal
        init: function(settings) {
            accordionHeader.on('click', function() {
                accordion.toggle($(this));
                if(accSettings.offsetAnchor) {
                    setTimeout(() => { 
                        $('html').animate({scrollTop: $(this).offset().top-accSettings.offsetFromTop}, accSettings.speed);
                        }, accSettings.scrollTopDelay);
                }
            });
        
            $.extend(accSettings, settings); 
        
            // ensure only one accordion is active if oneOpen is true
            if(settings.oneOpen && $(`.${prefix.item}.${activeClass}`).length > 1) {
                $(`.${prefix.item}.${activeClass}:not(:first)`).removeClass(activeClass).find(`.${prefix.header} > .${prefix.icon}`).removeClass(activeClass);
            }
            // reveal the active accordion bodies
            $(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
            
            var mouse_is_inside = false;
            
            $('.js-accordion-item').hover(function(){
                mouse_is_inside=true;}, function(){ 
                mouse_is_inside=false; 
                });

            $("body").mouseup(function(){ 
                if(! mouse_is_inside) { 
                //$('.js-accordion-item').removeClass('active');
                //$('.js-accordion-body').hide();
                accordionElem.find(`> .${prefix.item}`).removeClass(activeClass).find(accordionBody).slideUp(accSettings.speed);
                }
            });
        
        },
        
        toggle: function($this) {
            if(accSettings.oneOpen && $this[0] != $this.closest(accordionElem).find(`> .${prefix.item}.${activeClass} > .${prefix.header}`)[0]) {
                $this.closest(accordionElem).find(`> .${prefix.item}`).removeClass(activeClass).find(accordionBody).slideUp(accSettings.speed);
                $this.closest(accordionElem).find(`> .${prefix.item}`).find(`> .${prefix.header} > .${prefix.icon}`).removeClass(activeClass);
            }
            
            // show/hide the clicked accordion item
            $this.closest(accordionItem).toggleClass(`${activeClass}`).find(`> .${prefix.header} > .${prefix.icon}`).toggleClass(activeClass);
            $this.next().stop().slideToggle(accSettings.speed);
        }
    }
})();

$(document).ready(function(){
    accordion.init(accSettings);
});



//
// Add attr disabled to Disabled css
//
function disabled() {
    $(".disabled").attr('disabled');
}

disabled();