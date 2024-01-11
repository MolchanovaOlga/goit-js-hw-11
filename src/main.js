import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import icon from './img/icons/bi_x-octagon.svg';

const form = document.querySelector('form');
const textArea = document.querySelector('textarea');

form.addEventListener('submit', event => {
    event.preventDefault();

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

    return fetch(url).then(
        responce => {
            if (!responce.ok) {
                error();
            }
            console.log(responce)
        }
    )
};

function error() {
    iziToast.error({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
      backgroundColor: "#EF4040",
      messageColor: '#fff',
      iconUrl: icon,
    });
  }