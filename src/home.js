const LoadPage = (function() {

  const homePage = function() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const main = document.createElement('div');
    const home = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const restaurantAbout = document.createElement('p');
    const established = document.createElement('p');
    const ramen = document.createElement('img');

    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main-content');
    home.setAttribute('id', 'home');
    ramen.setAttribute('id', 'homeImg');
    ramen.setAttribute('src', './images/masahiro-miyagi-woF6s-esrds-unsplash.jpg')
    ramen.setAttribute('alt', 'ramen');
    restaurantName.textContent = "Ryuzashi Ramen";
    restaurantAbout.textContent = 
    "A midwestern take on authentic shoyu style ramen";
    established.textContent = "Established 2020";

    content.appendChild(header);
    content.appendChild(main);
    main.appendChild(home);
    header.appendChild(restaurantName);
    home.appendChild(restaurantAbout);
    home.appendChild(ramen);
    home.appendChild(established);
  };

  return { homePage };
})();

export default LoadPage;


{/*
<p>Photo by <a href="https://unsplash.com/@fla5h904?utm_source=unsplash&utm
_medium=referral&utm_content=creditCopyText" target="_blank">David Hunter
</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a></p> 
*/}