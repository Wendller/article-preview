const shareButton = document.querySelector('#share-button');
const modal = document.querySelector('.modal');

shareButton.addEventListener('click', (event) => {
  shareButton.classList.toggle('active');
  modal.classList.toggle('shared');
});