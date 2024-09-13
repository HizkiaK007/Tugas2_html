function showArticle(car) {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById(car).style.display = 'block';
}

function hideArticle() {
  document.getElementById('overlay').style.display = 'none';
  var articles = document.querySelectorAll('.artikel');
  articles.forEach((article) => (article.style.display = 'none'));
}

function showCarImage() {
  var carBrand = document.getElementById('car').value;
  var carImage = document.getElementById('carImage');
  var overlay = document.getElementById('overlayy');
  var image = document.getElementById('image');

  switch (carBrand) {
    case 'Mercedes':
      carImage.src = 'gclass.jpeg';
      carImage.alt = 'Mercedes Car';
      break;
    case 'Lamborghini':
      carImage.src = 'lambo.jpg';
      carImage.alt = 'Lamborghini Car';
      break;
    case 'Ferrari':
      carImage.src = 'ferr.jpg';
      carImage.alt = 'Ferrari Car';
      break;
    default:
      carImage.src = '';
      carImage.alt = 'Car Image';
      image.classList.remove('show');
      overlay.classList.remove('show');
      return;
  }

  image.classList.add('show');
  overlay.classList.add('show');
}

function closeImage() {
  var image = document.getElementById('image');
  var overlay = document.getElementById('overlayy');
  image.classList.remove('show');
  overlay.classList.remove('show');
}
