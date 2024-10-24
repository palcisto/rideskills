const toTopButton = document.querySelector('.js-to-top') as HTMLButtonElement;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton!.classList.add('back-to-top--is-visible');
  } else {
    toTopButton!.classList.remove('back-to-top--is-visible');
  }
}

function handleScrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

window.addEventListener('scroll', scrollFunction);
toTopButton!.addEventListener('click', handleScrollToTop);
