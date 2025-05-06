import "./styles.css";
import config from '../config.js';

// Constants for DOM elements
const img = document.querySelector('img');
const button = document.querySelector('button');
const searchInput = document.querySelector('input');
const apiKey = config.apiKey;

// Default search term
let searchTerm = 'kittens';

// Function to fetch GIF based on the search term
const fetchGifBySearchTerm = () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`, { mode: 'cors' })
        .then(response => response.json())
        .then(updateGifImage)
        .catch(handleError);
};

// Function to update the image source
const updateGifImage = (response) => {
    img.src = response.data.images.original.url;
};

// Function to handle errors
const handleError = (error) => {
    console.error('Error fetching GIF:', error);
};

// Event listener for button click
button.addEventListener('click', () => {
    searchTerm = searchInput.value; // Update search term from input
    fetchGifBySearchTerm(); // Fetch the GIF
});

// Initial fetch
fetchGifBySearchTerm();