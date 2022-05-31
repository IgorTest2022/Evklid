
//Окно поиска
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-btn').addEventListener('click', function(){
    document.querySelector('.header-search').classList.add('header-search--active');
  });
  document.querySelector('.header-search__cancel').addEventListener('click', function(){
    document.querySelector('.header-search').classList.remove('header-search--active');
  });
});

