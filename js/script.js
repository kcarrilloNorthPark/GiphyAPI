console.log("script.js loaded");

var endpoint = "https://api.giphy.com/v1/gifs/search?api_key=pUs7ayGnN3GewPPzch4HddPqY9t94OUD&q=mango&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#gif-search");

let images = [];

