const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
        accordionItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});

$('.Testimonials').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }
        },
    ]
});