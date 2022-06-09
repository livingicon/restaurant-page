import loadPage from './website';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

loadPage.website();
homePage();

const navigation = function(e) {
  const homeContent = document.getElementById('home-content');
  const menuContent = document.getElementById('menu-content');
  const contactContent = document.getElementById('contact-content')
  
  if(e.target.id === "menuBtn" && 
  !document.getElementById('dishOneImg') === true && 
  !document.getElementById('homeImg') === false) {
    homeContent.remove();
    menuPage();
  } else if (e.target.id === "menuBtn" && 
  !document.getElementById('dishOneImg') === true && 
  !document.getElementById('contact-content') === false) {
    contactContent.remove();
    menuPage();
  } else if (e.target.id === "homeBtn" && 
  !document.getElementById('homeImg') === true && 
  !document.getElementById('contact-content') === false) {
    contactContent.remove();
    homePage();
  } else if (e.target.id === "homeBtn" && 
  !document.getElementById('homeImg') === true && 
  !document.getElementById('dishOneImg') === false) {
    menuContent.remove();
    homePage();
  } else if (e.target.id === "contactBtn" && 
  !document.getElementById('contact-content') === true && 
  !document.getElementById('dishOneImg') === false) {
    menuContent.remove();
    contactPage();
  } else if (e.target.id === "contactBtn" && 
  !document.getElementById('contact-content') === true && 
  !document.getElementById('homeImg') === false) {
    homeContent.remove();
    contactPage();
  }
};

const listeners = function() {
  homeBtn.addEventListener('click', navigation);
  menuBtn.addEventListener('click', navigation);
  contactBtn.addEventListener('click', navigation);
};

listeners();

//rewrite into module functions? (syntax below)
// const loadPage = (function() {
// return { website, content }
// })();