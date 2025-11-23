console.log("script.js loaded");

var endpoint = "https://api.giphy.com/v1/gifs/search?api_key=pUs7ayGnN3GewPPzch4HddPqY9t94OUD&q=mango&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#gif-search");

let images = [];

async function fetchGifs(searchTerm = "cats") {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${searchTerm}&limit=10&rating=g`);
        const data = await response.json();

        // Clear previous images
        images = [];

        // Store original image URLs in the array
        data.data.forEach(gif => {
            images.push(gif.images.original.url);
        });

        console.log(images); // Preview in console
    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
}
