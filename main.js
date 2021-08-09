        const munculkan = document.getElementById("munculkan");
        const a = document.getElementById("ignis");
              b = document.getElementById("baleno");
              c = document.getElementById("s-cross");
              d = document.getElementById("karimun-50th");
              e = document.getElementById("wagon-r");
              f = document.getElementById("jimny");
              g = document.getElementById("apv-luxury");
              h = document.getElementById("apv-arena");
              i = document.getElementById("commercial-car");
              j = document.getElementById("nc");
              k = document.getElementById("nc-box");
              l = document.getElementById("nc-ambulance");
              m = document.getElementById("apv-ambulance");
              n = document.getElementById("apv-blindVan");
              o = document.getElementById("karimun-blindVan");

        munculkan.onclick = function () {
            a.classList.remove("hidden");
            b.classList.remove("hidden");
            c.classList.remove("hidden");
            d.classList.remove("hidden");
            e.classList.remove("hidden");
            f.classList.remove("hidden");
            g.classList.remove("hidden");
            h.classList.remove("hidden");
            i.classList.remove("hidden");
            j.classList.remove("hidden");
            k.classList.remove("hidden");
            l.classList.remove("hidden");
            m.classList.remove("hidden");
            n.classList.remove("hidden");
            o.classList.remove("hidden");
            munculkan.classList.add("hidden");
        }

        //
        window.onload = function () {
            scrollSpy('#a-nav', {
                offset: 0, // in pixels
                menuActiveTarget: 'li > a',
                sectionClass: '.scrollspy',
                activeClass: 'activeSpy',
                scrollContainer: ''
            });
        };

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            effect: "fade",
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        //
        document.getElementById('check').onclick = function () {
            document.getElementById("a-nav").classList.toggle("hidden");
            document.getElementById("header").classList.add("bg-gray-100-nav");
        }

        document.getElementById('a-nav').onclick = function () {
            document.getElementById("check").click();
        }

        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            progress = document.querySelector('#progress'),
            scroll;
        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("a-nav");


        document.addEventListener('scroll', function () {
            scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            progress.style.setProperty('--scroll', scroll + '%');
            scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add("bg-gray-100-nav");
            } else {
                header.classList.remove("bg-gray-100-nav");
                navcontent.classList.remove("bg-gray-100-nav");

            }

        });

        //
        jQuery(document).ready(function () {
            const offset = 500;
            const duration = 500;
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.crunchify-top').fadeIn(duration);
                } else {
                    jQuery('.crunchify-top').fadeOut(duration);
                }
            });

            jQuery('.crunchify-top').click(function (event) {
                event.preventDefault();
                jQuery('html, body').animate({
                    scrollTop: 0
                }, duration);
                return false;
            })
        });
