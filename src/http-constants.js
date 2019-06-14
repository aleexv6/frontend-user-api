import axios from 'axios'

let baseURL = 'http://localhost:8000/api';


export const HTTP = axios.create(
    {
        baseURL: baseURL
    });