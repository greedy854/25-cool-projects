let menuItems = document.querySelectorAll('.nav-bar ul li');

const navItemClick = function(el) {
  let element = this;
  
  menuItems.forEach(item => {
    item.classList.remove('active');
  });

  element.classList.add('active');
}

menuItems.forEach(item => {
  item.addEventListener('click', navItemClick);
});