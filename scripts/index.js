// ---- GET ----
// Variables
const getTenJokesTag = document.querySelector('#getTenJokesTag');
const getAmountJokesTag = document.querySelector('#getAmountJokesTag');
const getTenJokesFromCategoryTag = document.querySelector(
  '#getTenJokesFromCategoryTag'
);
const getAmountJokesFromCategoryTag = document.querySelector(
  '#getAmountJokesFromCategoryTag'
);
// Funtions
function fetchTenJokes() {
  fetch('http://localhost:5000/api/jokes/')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function fetchAmountJokes() {
  fetch('http://localhost:5000/api/jokes/4')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function fetchTenJokesFromCategory() {
  fetch('http://localhost:5000/api/jokes/science')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function AmountJokesFromCategory() {
  fetch('http://localhost:5000/api/jokes/science/3')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
// Events
getTenJokesTag.addEventListener('click', fetchTenJokes);
getAmountJokesTag.addEventListener('click', fetchAmountJokes);
getTenJokesFromCategoryTag.addEventListener('click', fetchTenJokesFromCategory);
getAmountJokesFromCategoryTag.addEventListener(
  'click',
  AmountJokesFromCategory
);
