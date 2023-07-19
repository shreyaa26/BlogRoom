//-----------------navigation bar------------------------------------

let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let navLinks = document.querySelectorAll('.navigation a');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open'); 
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active'); 
    menuToggle.classList.remove('hide');
}

menuToggle.onclick = function(){
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        header.classList.remove('open');
    });
});

window.addEventListener('scroll',function(){
    header.classList.toggle('sticky' , window.scrollY>0);
});

//-----------------------------------------------------------------------