import loadPage from './website';

const contactPage = function() {

  const contactContent = document.createElement('div');
  const phoneNumber = document.createElement('p');

  contactContent.setAttribute('id', 'contact-content');
  phoneNumber.textContent = "(765)765-7654";
  
  loadPage.content.appendChild(contactContent);
  contactContent.appendChild(phoneNumber);
};

export default contactPage;