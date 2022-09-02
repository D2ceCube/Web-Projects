(function() {
  const sizeArr = document.querySelectorAll('.filter__size--item');
  const colorArr = document.querySelectorAll('.color__item');
  const imgArr = document.querySelectorAll('.product_image');
  const currentColor = document.querySelector('.product--photo--visible');

  console.log(currentColor);

  const a = document.querySelector('.blackT');

  sizeArr.forEach(function(control) {
      control.addEventListener('click', function(e) {
        e.preventDefault();

        sizeArr.forEach(function(link){
          link.closest('.filter__size--item').classList.remove('filter__size--item--active');
        })

        control.closest('.filter__size--item').classList.add('filter__size--item--active');
      })
  });

  colorArr.forEach(function(control) {
    control.addEventListener('click', function(e) {
      e.preventDefault();



      colorArr.forEach(function(link){
        link.closest('.color__item').classList.remove('color__item--active');
      })

      const filterName = control.getAttribute("data-filter");
      console.log(filterName);

      imgArr.forEach(function(link) {
          if (filterName == 'black') {
            link.closest('.product_image').classList.remove('product--photo--visible');
            let a = document.querySelector('.blackT');
            a.classList.add('product--photo--visible');
          }
          else if (filterName == 'white') {
            link.closest('.product_image').classList.remove('product--photo--visible');
            let a = document.querySelector('.whiteT');
            a.classList.add('product--photo--visible');
          }
          else if (filterName == 'green') {
            link.closest('.product_image').classList.remove('product--photo--visible');
            let a = document.querySelector('.greenT');
            a.classList.add('product--photo--visible');
          }
          else if (filterName == 'blue') {
            link.closest('.product_image').classList.remove('product--photo--visible');
            let a = document.querySelector('.blueT');
            a.classList.add('product--photo--visible');
          }
          else if (filterName == 'red') {
            link.closest('.product_image').classList.remove('product--photo--visible');
            let a = document.querySelector('.redT');
            a.classList.add('product--photo--visible');
          }
      })

      control.closest('.color__item').classList.add('color__item--active');

    })
  })
}());
