!function(){"use strict";(function(){const o=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),e=document.querySelector(".nav-icon");o.onclick=function(){t.classList.toggle("mobile-nav--open"),e.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),$((function(){$(".blocks__items").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!0,autoplay:!1,prevArrow:'<button class="slide-arrow prev-arrow"></button>',nextArrow:'<button class="slide-arrow next-arrow"></button>'})}))}();