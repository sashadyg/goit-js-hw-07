import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')
const galleryMarkup = addGalleryMarkup(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup)

function addGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('')
}

galleryRef.addEventListener('click', galleryMarkupAnimation)

function galleryMarkupAnimation(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">`)

    instance.show();

    const closeModal = event => {
        if (event.code === 'Escape') {
            instance.close()
        }
    }

    document.addEventListener('keydown', closeModal)
}
