// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector(".form");
const input = document.querySelector(".search-input");

const myGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  enableKeyboard: true,
  docClose: true,
});



form.addEventListener("submit", checkEmptyInput);

// перевірка інпуту

function checkEmptyInput(e) {
    e.preventDefault();
   showLoader(true);
    const inputValue = input.value;
    if (!inputValue) {
       errorMess('Value cannot be empty')
    } else {
        getImg(inputValue)
            .then(data => {showLoader(false);
                if (data.hits.length === 0) {
                errorMess("Sorry, there are no images matching your search query. Please try again!");
                } else {
                    const images = data.hits;
                    createGallery(images);
                    
                    myGallery.refresh()
                }
            }).catch(error => {
                errorMess("Something wrong=(")
                showLoader(false);
            })
    }
};

const errorMess = (messege) => {
     iziToast.error({
    title: 'Error',
    message: messege,
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    maxWidth: 300,
    timeout: 2000,
    progressBar: false,
    position: 'topRight',
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 12,
})
}

// запрос

function getImg(inputValue) {
    const api = "https://pixabay.com/api/";
    const API_KEY = "43042666-e07e8410a021eff335b7f491d";
    const searchParams = {
        key: API_KEY,
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    };
    const params = new URLSearchParams(searchParams);
    const url = `${api}?${params}`;
return fetch(url).then(res => res.json());
    }
    
// рендер на сторінку
    

function createGallery(images) {
    const list = document.querySelector(".gallery");
    list.innerHTML = images.map(image => {
        return `<li class="list-item"><a href="${image.largeImageURL}">
        <img class="item-img" src="${image.webformatURL}" alt="${image.tags}"></a>
        <div class="container">
        <h3 class="title">Likes</h3>
      <p>${image.likes}</p></div >
      <div class="container">
        <h3 class="title">Views</h3>
      <p>${image.views}</p></div >
      <div class="container">
        <h3 class="title">Comments</h3>
      <p>${image.comments}</p></div >
      <div class="container">
        <h3 class="title">Downloads</h3>
      <p class="info">${image.downloads}</p></div >
        </li>`
    }).join("");
}

const showLoader = (state) => {
  const loader = document.querySelector('.loader');
  loader.style.display = state ? 'block' : 'none';
};
