import loadPage from './website';

const menuPage = function() {

  const menuContent = document.createElement('div');
  const menu = document.createElement('div');
  const dishOne = document.createElement('div');
  const dishOnePic = document.createElement('img');
  const dishOneName = document.createElement('h5');
  const dishOneDescription = document.createElement('p');

  menuContent.setAttribute('id', 'menu-content');
  menu.setAttribute('id', 'menu-items');
  dishOne.setAttribute('id', 'dishOne');
  dishOnePic.classList.add('dishPics');
  dishOnePic.setAttribute('src', './images/dishOne.jpg')
  dishOnePic.setAttribute('alt', 'spicy miso ramen');
  dishOneName.textContent = "SPICY MISO RAMEN";
  dishOneDescription.textContent = "Citarasa sup miso pedas yang lezat.";
  
  loadPage.content.appendChild(menuContent);
  menuContent.appendChild(menu);
  menu.appendChild(dishOne);
  dishOne.appendChild(dishOnePic);
  dishOne.appendChild(dishOneName);
  dishOne.appendChild(dishOneDescription);
};

export default menuPage;