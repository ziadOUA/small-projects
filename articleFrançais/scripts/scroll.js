const header = document.querySelector('.header')
const header_wrapper = document.querySelector('.header-wrapper')
const header_img = document.querySelector('.header-img')
const language = document.querySelector('.language-wrapper')
const header_subtitle = document.querySelector('.header-subtitle')
const inverted_right_corner = document.querySelector('.inverted-topright-corner')
const inverted_left_corner = document.querySelector('.inverted-topleft-corner')

window.onscroll = function() {
    let distance_scrolled = document.documentElement.scrollTop;

    if (distance_scrolled > 100) {
        header.className = 'header scroll'
        header_wrapper.className = 'header-wrapper scroll'
        header_img.className = 'header-img scroll'
        language.className = 'language-wrapper hidden'
        header_subtitle.className = 'header-subtitle hidden'
        inverted_left_corner.className = 'inverted-topleft-corner hidden'
        inverted_right_corner.className = 'inverted-topright-corner hidden'
    }

    if (window.pageYOffset === 0) {
        header.className = 'header'
        header_wrapper.className = 'header-wrapper'
        header_img.className = 'header-img'
        language.className = 'language-wrapper'
        header_subtitle.className = 'header-subtitle'
        inverted_left_corner.className = 'inverted-topleft-corner'
        inverted_right_corner.className = 'inverted-topright-corner'
    }
}