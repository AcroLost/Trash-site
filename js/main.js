document.querySelector('#preloader').style.display = 'none';


$('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});


document.querySelector('#menu').onclick = () => {
    document.querySelector('.dropdown').classList.toggle('dropdown_active');
    if (document.querySelector('.dropdown').classList.contains('dropdown_active')) {
        document.querySelector('#menu').style.display = 'none';
        document.querySelector('#menu_close').style.display = 'block';
        document.querySelector('main').insertAdjacentHTML("beforebegin", "<div class='overlay'></div>");
    }
}
document.querySelector('#menu_close').onclick = () => {
    document.querySelector('.dropdown').classList.toggle('dropdown_active');
    if (!document.querySelector('.dropdown').classList.contains('dropdown_active')) {
        document.querySelector('#menu_close').style.display = 'none';
        document.querySelector('#menu').style.display = 'block';
        document.querySelector('.overlay').remove();
    }
}