import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import { galleryItems } from './gallery-items.js';
import 'photoswipe/dist/photoswipe.css';




const ref = {
  gallary: document.querySelector('.gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  btnClose: document.querySelector('.lightbox__button'),
  imgRef: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
};

function addImages(gallary) {
  for (const item of gallary) {
    const createDiv = document.createElement('li');
    const prewie = item.preview;
    const original = item.original;
    const description = item.description;
    createDiv.innerHTML = `  
        <a class="gallery__link" href="${original}"
        data-pswp-width="1600"
        data-pswp-height="1000" 
        target="_blank"
        >
        <img
          class="gallery__image"
          src="${prewie}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
    ref.gallary.appendChild(createDiv);
  }
}

addImages(galleryItems);

const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: 'li',
  pswpModule: () => import('photoswipe'),
});

lightbox.init();

