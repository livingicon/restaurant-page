import loadPage from './website';

const menuPage = function() {
  // Variables
  const menuContent = document.createElement('div');
  const menu = document.createElement('div');

  const dishOne = document.createElement('div');
  const dishOnePic = document.createElement('img');
  const dishOneName = document.createElement('h4');
  const dishOneDescription = document.createElement('p');

  const dishTwo = document.createElement('div');
  const dishTwoPic = document.createElement('img');
  const dishTwoName = document.createElement('h4');
  const dishTwoDescription = document.createElement('p');

  const dishThree = document.createElement('div');
  const dishThreePic = document.createElement('img');
  const dishThreeName = document.createElement('h4');
  const dishThreeDescription = document.createElement('p');

  const dishFour = document.createElement('div');
  const dishFourPic = document.createElement('img');
  const dishFourName = document.createElement('h4');
  const dishFourDescription = document.createElement('p');


  //Content
  menuBtn.style.borderBottom = "2px solid #eee";
  homeBtn.style.borderBottom = "none";
  contactBtn.style.borderBottom = "none";
  menuContent.setAttribute('id', 'menu-content');
  menu.setAttribute('id', 'menu-items');

  dishOne.classList.add('dishes');
  dishOnePic.classList.add('dishPics');
  dishOnePic.setAttribute('src', './images/dishOne.jpg')
  dishOnePic.setAttribute('alt', 'spicy miso ramen');
  dishOneName.textContent = "SPICY MISO RAMEN";
  dishOneDescription.textContent = "Citarasa sup miso pedas yang lezat.";

  dishTwo.classList.add('dishes');
  dishTwoPic.classList.add('dishPics');
  dishTwoPic.setAttribute('src', './images/dishTwo.jpeg')
  dishTwoPic.setAttribute('alt', 'curry ramen');
  dishTwoName.textContent = "CURRY RAMEN";
  dishTwoDescription.textContent = "ramen dengan citarasa kuah kari.";

  dishThree.classList.add('dishes');
  dishThreePic.classList.add('dishPics');
  dishThreePic.setAttribute('src', './images/dishThree.jpg')
  dishThreePic.setAttribute('alt', 'abura soba');
  dishThreeName.textContent = "ABURA SOBA";
  dishThreeDescription.textContent = "Dikenal sebagai ramen tanpa sup.";

  dishFour.classList.add('dishes');
  dishFourPic.classList.add('dishPics');
  dishFourPic.setAttribute('src', './images/dishFour.jpg')
  dishFourPic.setAttribute('alt', 'yakiniku don');
  dishFourName.textContent = "YAKINIKU DON";
  dishFourDescription.textContent = 
  "Irisan daging sapi lembut dengan saus yakiniku diatas nasi.";

  
  //Append Content
  loadPage.content.appendChild(menuContent);
  menuContent.appendChild(menu);

  menu.appendChild(dishOne);
  dishOne.appendChild(dishOnePic);
  dishOne.appendChild(dishOneName);
  dishOne.appendChild(dishOneDescription);

  menu.appendChild(dishTwo);
  dishTwo.appendChild(dishTwoPic);
  dishTwo.appendChild(dishTwoName);
  dishTwo.appendChild(dishTwoDescription);

  menu.appendChild(dishThree);
  dishThree.appendChild(dishThreePic);
  dishThree.appendChild(dishThreeName);
  dishThree.appendChild(dishThreeDescription);

  menu.appendChild(dishFour);
  dishFour.appendChild(dishFourPic);
  dishFour.appendChild(dishFourName);
  dishFour.appendChild(dishFourDescription);
};

export default menuPage;