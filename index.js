const uniqeHome =  document.getElementById('uniqe-home');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

uniqeHome.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };
