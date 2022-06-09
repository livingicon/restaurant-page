import loadPage from './website';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

loadPage.website();
homePage();
// navigation();
homeBtn.addEventListener('click', navigation);
menuBtn.addEventListener('click', navigation);
contactBtn.addEventListener('click', navigation);

function navigation(e) {
  const homeContent = document.getElementById('home-content');
  const menuContent = document.getElementById('menu-content');
  const contactContent = document.getElementById('contact-content')
  
  // homeBtn.addEventListener('click', navigation);
  // menuBtn.addEventListener('click', navigation);
  // contactBtn.addEventListener('click', navigation);

  if(e.target.id === "menuBtn" && 
  !document.getElementById('menu-content') === true && 
  !document.getElementById('home-content') === false) {
    homeContent.remove();
    menuPage();
  } else if (e.target.id === "menuBtn" && 
  !document.getElementById('menu-content') === true && 
  !document.getElementById('contact-content') === false) {
    contactContent.remove();
    menuPage();
  } else if (e.target.id === "homeBtn" && 
  !document.getElementById('home-content') === true && 
  !document.getElementById('contact-content') === false) {
    contactContent.remove();
    homePage();
  } else if (e.target.id === "homeBtn" && 
  !document.getElementById('home-content') === true && 
  !document.getElementById('menu-content') === false) {
    menuContent.remove();
    homePage();
  } else if (e.target.id === "contactBtn" && 
  !document.getElementById('contact-content') === true && 
  !document.getElementById('menu-content') === false) {
    menuContent.remove();
    contactPage();
  } else if (e.target.id === "contactBtn" && 
  !document.getElementById('contact-content') === true && 
  !document.getElementById('home-content') === false) {
    homeContent.remove();
    contactPage();
  }
};