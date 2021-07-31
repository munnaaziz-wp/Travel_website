// == SHOW MENU

const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')

    //   validate if 

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    // Remove menu on click

    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')

        // When click on each nav_link remove the show menu class
        navMenu.classList.remove('show-menu')

    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


    // === Change background header ===

    function scrollHeader(){
        const header = document.getElementById('header')

        if(this.scrollY >= 100){
            header.classList.add('scroll-header');
        }
        else{
            header.classList.remove('scroll-header')
        }
    }
    window.addEventListener('scroll', scrollHeader);


// Swiper discover

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 50,
    },
    
  });

//   === VIDEO

const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        // play video
        videoFile.play()

        // we change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        // pause video
        videoFile.pause()

        // we change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo(){
    // video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);

// ==== SHOW SCROLL UP

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 200 viewport, add the show-scroll class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)


// Scroll active links

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']' ).classList.add('active-link')
        } else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']' ).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// === scroll reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal('.home_data, .home_social_link, .home_info, .discover_container, .experience_overlay, .place_card, .sponsor_content, .footer_data, .footer_rights',{
    origin: 'top',
    interval: 100,
})

sr.reveal('.about_data, .video_description, .subscribe_description',{
    origin: 'left',
    
})

sr.reveal('.about_image_overlay, .video_content, .subscribe_form',{
    origin: 'right',
    interval: 100,

})

