(function() {
  const elem = document.querySelector('.desc__filter');
  const iso = new Isotope( elem, {
  itemSelector: '.desc__item',
  filter: '.desc'
});

const controlls = document.querySelectorAll('.filter__link');
const activeClass = 'filter__item--active';

controlls.forEach(function(control) {
  control.addEventListener('click', function(e) {
    e.preventDefault();

    const filterName = control.getAttribute("data-filter");

    controlls.forEach(function(link){
      link.closest('.filter__item').classList.remove(activeClass);
    })

    control.closest('.filter__item').classList.add(activeClass);

    iso.arrange({
      filter: `.${filterName}`
    })
  })

})

}());
