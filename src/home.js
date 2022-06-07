const LoadPage = (function() {

  const homePage = function() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const navigation = document.createElement('nav');
    const homeBtn = document.createElement('homeBtn');
    const menuBtn = document.createElement('menuBtn');
    const contactBtn = document.createElement('contactBtn');
    const main = document.createElement('div');
    const home = document.createElement('div');
    const restaurantAbout = document.createElement('p');
    const ramen = document.createElement('img');
    const established = document.createElement('p');

    header.setAttribute('id', 'header');
    restaurantName.textContent = "Ryuzashi Ramen";
    navigation.classList.add('nav-btns');
    homeBtn.setAttribute('id', 'homeBtn');
    menuBtn.setAttribute('id', 'menuBtn');
    contactBtn.setAttribute('id', 'contactBtn');
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    main.setAttribute('id', 'main-content');
    home.setAttribute('id', 'home');
    restaurantAbout.textContent = 
    "A midwestern take on authentic shoyu style ramen";
    ramen.setAttribute('id', 'homeImg');
    ramen.setAttribute('src', './images/masahiro-miyagi-woF6s-esrds-unsplash.jpg')
    ramen.setAttribute('alt', 'ramen');
    established.textContent = "Established 2020";

    content.appendChild(header);
    header.appendChild(restaurantName);
    header.appendChild(navigation);
    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);
    content.appendChild(main);
    main.appendChild(home);
    home.appendChild(restaurantAbout);
    home.appendChild(ramen);
    home.appendChild(established);
  };

  return { homePage };
})();

export default LoadPage;

// add menu and style menu