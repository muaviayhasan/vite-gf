import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// API to get products from mock server
export const getProducts = function() {
    return axios.get(API_URL + '/mock-server/products.json')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error - return empty array if mock data doesn't exist
            console.warn('Mock products.json not found, returning empty array');
            return [];
        });
}

// API to get posts from mock server
export const getPosts = function() {
    return axios.get(API_URL + '/mock-server/posts.json')
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            // handle error - return empty array if mock data doesn't exist
            console.warn('Mock posts.json not found, returning empty array');
            return [];
        })
}