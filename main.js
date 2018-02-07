console.log("hi");

let sliders = document.querySelectorAll(".sliderGroup");
console.log(sliders);

// from the Underscore Library
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkScroll(e) {
  sliders.forEach(slider => {
    //halfway through div
    const slideAt =
      window.scrollY + window.innerHeight - slider.clientHeight / 2;
    //bottom of the div
    const bottomOfSlider = slider.offsetTop + slider.clientHeight;
    const isHalfShown = slideAt > slider.offsetTop;
    const isNotScrollPass = window.scrollY < bottomOfSlider;
    if (isHalfShown && isNotScrollPass) {
      console.log(true);
      slider.classList.add("active");
    } else {
      console.log(false);
      slider.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkScroll));
