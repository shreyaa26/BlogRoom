let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
}