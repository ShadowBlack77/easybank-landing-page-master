const hamBtn = document.querySelector('#ham-btn');
const hamMenu = document.querySelector('#ham-menu');

const toggleHamMenu = () => {
  hamMenu.classList.toggle('showed');
  hamBtn.classList.toggle('showed');
};

hamBtn.addEventListener('click', toggleHamMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth) {
    hamMenu.classList.remove('showed');
    hamBtn.classList.remove('showed');
  }
})