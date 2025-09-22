import axios from "axios";

// Base URL for all requests (replace with your backend)
const API_BASE_URL = "https://dummyjson.com";

// Create an axios instance for convenience
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

// --- Product APIs ---
export function getProductList() {
    return api.get("/products");
}

export function getProductDetail(id) {
    return api.get(`/products/${id}`);
}

// --- Auth APIs ---
export function loginUser(email, password) {
    return api.post("/login", { email, password });
}

export function fetchCurrentUser() {
    return api.get("/me");
}

// --- Cart APIs (if backend supports it) ---
// export function getCart() {
//   return api.get("/cart");
// }

// export function updateCart(cart) {
//   return api.post("/cart", cart);
// }
