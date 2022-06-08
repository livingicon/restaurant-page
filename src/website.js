
const loadPage = (function() {

  const website = function() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const navigation = document.createElement('nav');
    const homeBtn = document.createElement('homeBtn');
    const menuBtn = document.createElement('menuBtn');
    const contactBtn = document.createElement('contactBtn');

    header.setAttribute('id', 'header');
    restaurantName.textContent = "Ryuzashi Ramen";
    navigation.classList.add('nav-btns');
    homeBtn.setAttribute('id', 'homeBtn');
    menuBtn.setAttribute('id', 'menuBtn');
    contactBtn.setAttribute('id', 'contactBtn');
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    content.appendChild(header);
    header.appendChild(restaurantName);
    header.appendChild(navigation);
    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);

  };

  return { website, content };

})();

export default loadPage;