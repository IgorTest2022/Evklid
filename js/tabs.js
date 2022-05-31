document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.work-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
        document.querySelectorAll('.work-descr').forEach(function(tabContent){
        tabContent.classList.remove('work-descr--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work-descr--active')
      document.querySelectorAll('.work-btn').forEach(function(btn){
        btn.classList.remove('work-btn--active')});
        event.currentTarget.classList.add('work-btn--active');
    });
  });
});
