const LoadPage = (function() {

  const homePage = function() {
    const content = document.getElementById('content');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Ryuzashi Ramen";

    content.appendChild(restaurantName);
  };

  return { homePage };
})();

export default LoadPage;

/* <div id="headline">
<h1>Ryuzashi Ramen</h1>
</div>
<div id="copy">
<p>A midwestern take on authentic shoyu style ramen. Established 2020.</p>
</div>
<img src="./images/david-hunter-xhOkqfXYls8-unsplash.jpg" alt="ramen">
<p>Photo by <a href="https://unsplash.com/@fla5h904?utm_source=unsplash&utm
_medium=referral&utm_content=creditCopyText" target="_blank">David Hunter
</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a></p> */