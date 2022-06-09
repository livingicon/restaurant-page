import loadPage from './website';

const contactPage = function() {

  const contactContent = document.createElement('div');
  const phone = document.createElement('div');
  const phoneNumberIcon = document.createElement('img');
  const phoneNumber = document.createElement('p');
  const location = document.createElement('div');
  const addressIcon = document.createElement('img');
  const address = document.createElement('p');
  const mail = document.createElement('div');
  const emailIcon = document.createElement('img');
  const email = document.createElement('p');

  contactBtn.style.borderBottom = "2px solid #eee";
  homeBtn.style.borderBottom = "none";
  menuBtn.style.borderBottom = "none";

  contactContent.setAttribute('id', 'contact-content');
  phone.setAttribute('id', 'phone');
  phoneNumberIcon.setAttribute('src', './images/phone-classic.png');
  phoneNumber.textContent = "(765) 765-7654";
  location.setAttribute('id', 'location');
  addressIcon.setAttribute('src', './images/map-marker-alert.png');
  address.innerHTML = "765 Ramen Rd.<br />Kokomo, IN 46901";
  mail.setAttribute('id', 'mail');
  emailIcon.setAttribute('src', './images/email-send.png');
  email.textContent = "email@fake-email.com";
  
  loadPage.content.appendChild(contactContent);
  contactContent.appendChild(phone);
  phone.appendChild(phoneNumberIcon);
  phone.appendChild(phoneNumber);
  contactContent.appendChild(location);
  location.appendChild(addressIcon);
  location.appendChild(address);
  contactContent.appendChild(mail);
  mail.appendChild(emailIcon);
  mail.appendChild(email);
};

export default contactPage;