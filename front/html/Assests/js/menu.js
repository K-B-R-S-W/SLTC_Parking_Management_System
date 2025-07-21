document.addEventListener('click', function(event) {
  const subMenu = document.getElementById('subMenu');
  const profileIcon = document.querySelector('.profile img');

  // Check if the click occurred outside of the submenu and profile icon
  if (!subMenu.contains(event.target) && event.target !== profileIcon) {
    subMenu.classList.remove('open-menu');
  }
});

function toggleMenu() {
  const subMenu = document.getElementById('subMenu');
  subMenu.classList.toggle('open-menu');
}
