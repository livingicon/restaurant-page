import loadPage from './website';

const homePage = function() {

  const homeContent = document.createElement('div');
  const home = document.createElement('div');
  const restaurantAbout = document.createElement('p');
  const ramen = document.createElement('img');
  const established = document.createElement('p');

  homeBtn.style.borderBottom = "2px solid #eee";
  menuBtn.style.borderBottom = "none";
  contactBtn.style.borderBottom = "none";
  homeContent.setAttribute('id', 'home-content');
  home.setAttribute('id', 'home');
  restaurantAbout.textContent = 
  "A midwestern take on authentic shoyu style ramen";
  ramen.setAttribute('id', 'homeImg');
  ramen.setAttribute('src', './images/masahiro-miyagi-woF6s-esrds-unsplash.jpg')
  ramen.setAttribute('alt', 'ramen');
  established.textContent = "Established 2020";

  loadPage.content.appendChild(homeContent);
  homeContent.appendChild(home);
  home.appendChild(restaurantAbout);
  home.appendChild(ramen);
  home.appendChild(established);
};

export default homePage;