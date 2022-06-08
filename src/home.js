import loadPage from './website';

const homePage = function() {
  loadPage.website()
  const main = document.createElement('div');
  const home = document.createElement('div');
  const restaurantAbout = document.createElement('p');
  const ramen = document.createElement('img');
  const established = document.createElement('p');

  main.setAttribute('id', 'main-content');
  home.setAttribute('id', 'home');
  restaurantAbout.textContent = 
  "A midwestern take on authentic shoyu style ramen";
  ramen.setAttribute('id', 'homeImg');
  ramen.setAttribute('src', './images/masahiro-miyagi-woF6s-esrds-unsplash.jpg')
  ramen.setAttribute('alt', 'ramen');
  established.textContent = "Established 2020";

  loadPage.content.appendChild(main); //get this to work?
  main.appendChild(home);
  home.appendChild(restaurantAbout);
  home.appendChild(ramen);
  home.appendChild(established);
};

export default homePage;