const header = document.querySelector('.header')
const header_wrapper = document.querySelector('.header-wrapper')
const header_img = document.querySelector('.header-img')
const language = document.querySelector('.language-wrapper')
const header_subtitle = document.querySelector('.header-subtitle')
const connection = document.querySelector('.connection-wrapper')
const page_content = document.querySelector('.page-content-wrapper')
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
        connection.className = 'connection-wrapper scroll'
        page_content.className = 'page-content-wrapper scroll'
        inverted_left_corner.className = 'inverted-topleft-corner scroll'
        inverted_right_corner.className = 'inverted-topright-corner scroll'
    }

    if (window.pageYOffset === 0) {
        header.className = 'header'
        header_wrapper.className = 'header-wrapper'
        header_img.className = 'header-img'
        language.className = 'language-wrapper'
        header_subtitle.className = 'header-subtitle'
        connection.className = 'connection-wrapper'
        page_content.className = 'page-content-wrapper'
        inverted_left_corner.className = 'inverted-topleft-corner'
        inverted_right_corner.className = 'inverted-topright-corner'
    }
}