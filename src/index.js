import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
input.addEventListener('input', onInput);
function onInput(event) {
  const name = event.currentTarget.value;
  fetchCountries(name)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
