import loadPage from './website';
import homePage from './home';
import menuPage from './menu';

homePage();

const logIt = function(e) {
  if(e.target.id === "menuBtn") {
    const homeContent = document.getElementById('home-content');
    homeContent.remove();
    menuPage();
  }
};

const navigation = function() {
  homeBtn.addEventListener('click', logIt);
  menuBtn.addEventListener('click', logIt);
  contactBtn.addEventListener('click', logIt);
};

navigation();