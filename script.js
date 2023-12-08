document.getElementById('ifpiaButton').addEventListener('click', function () {
  var ifpiaImage = document.getElementById('ifpiaImage');

  if (ifpiaImage.style.display === 'none') {
    ifpiaImage.style.display = 'block';
    this.innerHTML = "Cacher l'image";
    this.style.backgroundColor = 'grey';
    this.style.color = 'purple';
  } else {
    ifpiaImage.style.display = 'none';
    this.innerHTML = 'Présentation de IFPIA';
    this.style.backgroundColor = 'purple';
    this.style.color = 'white';
  }
});
