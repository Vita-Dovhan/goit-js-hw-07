import { galleryItems } from './gallery-items.js';

const containerEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(element => {
    return `<div class="gallery__item">
    <a class="gallery__item" href="${element.original}">
    <img class="gallery__image"
    alt="${element.description}" 
    src="${element.preview}"
     title = "${element.description}" 
    captionDelay = 250ms>
    </a>
    </div>`;
  })
  .join('');
containerEl.insertAdjacentHTML('afterbegin', markup);

const gallery = new SimpleLightbox('.gallery__item a');
gallery.on('show.simplelightbox', function () {

});

