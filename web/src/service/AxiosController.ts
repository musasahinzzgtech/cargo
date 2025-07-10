import axios from "axios";

// Create axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1", // your API base URL
  timeout: 10000, // optional timeout
});

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
  (config) => {
    // Example: attach auth token from localStorage or redux store
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // You can modify config here (e.g. add headers)
    return config;
  },
  (error) => {
    // Request error handling
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    // Any status code in the range of 2xx triggers this function
    // You can modify the response here if needed
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      // Access error status code
      const status = error.response.status;

      // Example: token expired (401 Unauthorized)
      if (status === 401 && !originalRequest._retry) {
        window.location.pathname = "/login";
        window.localStorage.clear();
      }

      // Handle other status codes globally if you want
      if (status === 403) {
        // Forbidden example: show message or redirect
        console.warn("Access forbidden");
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received from server");
    } else {
      // Other errors
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
