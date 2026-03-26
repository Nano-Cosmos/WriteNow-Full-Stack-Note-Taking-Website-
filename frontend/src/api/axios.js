import axios from 'axios'

const api = axios.create({
    baseURL: "https://writenow-full-stack-note-taking-website.onrender.com",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)
console.log("API URL:", process.env.REACT_APP_API_URL);

export default api;