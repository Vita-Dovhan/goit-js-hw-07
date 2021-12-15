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

function onClickImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
     <img src="${event.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscClose);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscClose)
      }
    })

  instance.show();
  function onEscClose(event) {
    if (event.code === 'Escape') {
      instance.close()
    }
  };
}






