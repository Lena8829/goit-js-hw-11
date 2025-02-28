import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

//-------------------------------------------------------------------------------------------------

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    return;
  }

  loader.classList.remove('hidden');

  searchImages(query)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 20000,
        });
      } else {
        renderImages(images.hits);
      }

      loader.classList.add('hidden');
    })
    .catch(error => {
      loader.classList.add('hidden');

      console.log(error);
    });
  searchForm.reset();
}

// searchImages('pug')
//   .then(images => {
//     const markup = renderImages(images.hits);
//     console.log(markup);
//   })
//   .catch(error => console.log(error));
