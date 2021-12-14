import { galleryItems } from './gallery-items.js';

const containerEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(element => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img class="gallery__image" 
    src="${element.preview}"
    data-source="${element.original}">
    </a>
    </div>`;
  })
  .join('');
containerEl.insertAdjacentHTML('afterbegin', markup);

containerEl.addEventListener('click', onClickImage);
window.removeEventListener('keydown', onEscClose)

function onClickImage(event) {
  event.preventDefault();
  const imgSrc = event.target.dataset.source
  const instance = basicLightbox.create(`
     <img src="${imgSrc}"/>
  `)
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  instance.show();
  window.addEventListener('keydown', onEscClose)
}

function onEscClose(event) {
  event.preventDefault();
  const imgSrc = event.target.dataset.source
  const instance = basicLightbox.create(`
     <img src="${imgSrc}"/>
  `)
  if (event.target.code === 'Escape') {

    instance.close()
  }
};


