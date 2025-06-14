document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  
  const frames = gsap.utils.toArray('.vibro-frame');
  gsap.set(frames, { opacity: 0 });

  const tl = gsap.timeline({
    repeat: -1,
  });

  frames.forEach((frame, index) => {
    const delay = index * 0.5; 

    tl.to(frames, {
      opacity: 0,
      duration: 0.5,
      immediateRender: false
    }, delay);

    tl.to(frame, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, delay);
  });


  const leftPhlScare = document.querySelector(".top-phl-sncrhx368942__toothbrush-left");
  const rightPhlScare = document.querySelector(".top-phl-sncrhx368942__toothbrush-right");

  let maxWithMob = window.matchMedia("(max-width: 767.98px)").matches;
  let brushEndMarkers = maxWithMob ? "bottom-=80% center" : "bottom-=30% center";

  if (leftPhlScare && rightPhlScare) {
    gsap.set(leftPhlScare, { xPercent: -100 });
    gsap.set(rightPhlScare, { xPercent: 100 });

    gsap.to(leftPhlScare, {
      xPercent: 3, 
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ".top-phl-sncrhx368942__inner",  
        start: "top-=30% center",
        end: brushEndMarkers,
      }
    });

    gsap.to(rightPhlScare, {
      xPercent: 0, 
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ".top-phl-sncrhx368942__inner",
        start: "top-=30% center",
        end: brushEndMarkers,
      }
    });
  }
  
  let itemsPhlScare = gsap.utils.toArray(".smart-philips-sncrhx368942__item");
 
  itemsPhlScare.forEach(item => {
    const textPhlScare = item.querySelector('.smart-philips-sncrhx368942__text');
    const iconPhlScare = item.querySelector('.smart-philips-sncrhx368942__icon');
    const imagePhlScare = item.querySelector('.smart-philips-sncrhx368942__image-overlay');

    gsap.to(item, {
      background: "#52A4AC",
      boxShadow: "0 3px 16px rgba(15, 58, 73, 0.45)",
      scrollTrigger: {
        trigger: item,
        start: "top+=10% center",
        end: "top+=20% center",
        scrub: 2,
      }
    });
 
    gsap.fromTo(textPhlScare,
      { opacity: 0, y: "-50%" },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "top+=10% center",
          end: "top+=20% center",
          scrub: 2,
        }
      }
    );

    gsap.fromTo(iconPhlScare,
      { top: "50%"},
      {          
        top: "100%", 
        scrollTrigger: {
            trigger: item,
            start: "top+=10% center",
            end: "top+=20% center",
            scrub: 2,            
        },
      }
    );

    gsap.to(imagePhlScare, 
      {
        backgroundColor: "rgba(0, 0, 0, 0)",
        scrollTrigger: {
          trigger: item,
          start: "top+=40% center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );
  });
 
  if (window.innerWidth >= 767.98) {
    gsap.fromTo(
      ".nozzle-philips-sncrhx368942__row:nth-child(1) .nozzle-philips-sncrhx368942__item",
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".nozzle-philips-sncrhx368942__row:nth-child(1)",
          start: "top-=30% bottom",
          end: "top center",          
          scrub: 2,
        },
      }
    ); 
    
    gsap.fromTo(
      ".nozzle-philips-sncrhx368942__row:nth-child(2) .nozzle-philips-sncrhx368942__item",
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".nozzle-philips-sncrhx368942__row:nth-child(2)",
          start: "top+=35% bottom",
          end: "top+=45% center", 
          scrub: 2,
        },
      }
    );
  }
 
  gsap.fromTo(
    ".slider-philips-sncrhx368942__title",
    { y: "-100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".slider-philips-sncrhx368942__title",
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          gsap.to(".slider-philips-sncrhx368942__title", {duration: 1.5, opacity: self.progress});
      },
      },
    }
  );
 
  const topSliderSwiper = new Swiper('.top-slider__swiper', {
    speed: 500,
    slidesPerView: 7,
    spaceBetween: 17,
    loop: true,    
  });
 
  document.querySelector('.bottom-controls__button_prev').addEventListener('click', () => {
    topSliderSwiper.slidePrev();
  });
 
  document.querySelector('.bottom-controls__button_next').addEventListener('click', () => {
    topSliderSwiper.slideNext();
  }); 
 
  if (window.innerWidth >= 767.98){
    gsap.fromTo(
      ".slider-philips-sncrhx368942__media",
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".slider-philips-sncrhx368942__media",
          start: "top-=70% center",
          end: "top+=25% center", 
        },
      }
    );
  }
 
  document.addEventListener("lazyloaded", function (e) {
    ScrollTrigger.refresh();
  });
 });
