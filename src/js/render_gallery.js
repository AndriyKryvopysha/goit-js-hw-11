import cardTpl from '../templates/card_template.hbs'

export { renderGallery };

const gallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images
    .map(image => {
           
      return cardTpl(image);      
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}