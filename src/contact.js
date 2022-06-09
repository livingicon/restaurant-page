import loadPage from './website';

const contactPage = function() {

  const contactContent = document.createElement('div');

  const phoneNumberIcon = document.createElement('img');
  const phoneNumber = document.createElement('p');

  const addressIcon = document.createElement('img');
  const address = document.createElement('p');

  const emailIcon = document.createElement('img');
  const email = document.createElement('p');


  contactContent.setAttribute('id', 'contact-content');

  phoneNumberIcon.setAttribute('src', './images/phone-classic.png');
  phoneNumber.textContent = "(765) 765-7654";

  addressIcon.setAttribute('src', './images/map-marker-alert.png');
  address.innerHTML = "765 Ramen Rd.<br />Kokomo, IN 46901";

  emailIcon.setAttribute('src', './images/email-send.png');
  email.textContent = "email@fake-email.com";
  
  loadPage.content.appendChild(contactContent);
  contactContent.appendChild(phoneNumberIcon);
  contactContent.appendChild(phoneNumber);
  contactContent.appendChild(addressIcon);
  contactContent.appendChild(address);
  contactContent.appendChild(emailIcon);
  contactContent.appendChild(email);
};

export default contactPage;