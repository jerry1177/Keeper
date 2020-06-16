import axios from 'axios'

const publicFetch = axios.create({
    baseURL: ProcessingInstruction.env.REACT_APP_API_URL
});

export { publicFetch };