import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import icon from './img/icons/bi_x-octagon.svg';

const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('span');

form.addEventListener('submit', event => {
    event.preventDefault();
    loader.classList.add("loader");
    gallery.textContent = '';
    
    const valueOfTextarea = textArea.value;
    fetchImages(valueOfTextarea);

    form.reset();
});


function fetchImages(value) {  
    const searchParams = new URLSearchParams({
        key: "41764698-0ccaaf72f9cf319226b6a04c5",
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    fetch(url).then(
        response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .then(data => {
            let arrayOfImg = data.hits;
            if (arrayOfImg.length == 0) {
                noImages();
                return;
            }
            createGallery(arrayOfImg);
        })
        .catch(error => {
            console.log(error);
            errorMessage();
        })
        .finally(() => loader.classList.remove("loader"));
};

function noImages() {
    iziToast.error({
      message: "Sorry, there are no images matching<br/>your search query. Please try again!",
      position: "topRight",
      backgroundColor: "#EF4040",
      messageColor: '#fff',
      iconUrl: icon,
    });
}

function errorMessage() {
    iziToast.error({
      message: "Sorry, an error occurred. Please try again later!",
      position: "topRight",
      backgroundColor: "#EF4040",
      messageColor: '#fff',
      iconUrl: icon,
    });
}
  
function createGallery(arr) {

    const galleryList = arr.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${likes}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${views}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${comments}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>
        `
    }).join('');
    gallery.insertAdjacentHTML('beforeend', galleryList);

    const newLightBox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

    newLightBox.refresh();
}


  