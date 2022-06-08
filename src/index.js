import loadPage from './website';
import homePage from './home';
import menuPage from './menu';

loadPage.website();
homePage();

const logIt = function(e) {
  const homeContent = document.getElementById('home-content');
  const menuContent = document.getElementById('menu-content');
  if(e.target.id === "menuBtn" && !document.getElementById('dishOneImg') === true) {
    homeContent.remove();
    menuPage();
  } else if (e.target.id === "homeBtn" && !document.getElementById('homeImg') === true) {
    menuContent.remove()
    homePage();
  }
};

const navigation = function() {
  homeBtn.addEventListener('click', logIt);
  menuBtn.addEventListener('click', logIt);
  contactBtn.addEventListener('click', logIt);
};

navigation();