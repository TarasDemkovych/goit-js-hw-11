import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';

export async function makeSearch(searchWords) {
    return axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '49667075-d98922f201863107fc2d4193e',
            q: searchWords,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 21,
        }
    })
};