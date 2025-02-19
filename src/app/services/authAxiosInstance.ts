import axios from "axios";

const getAccessToken = () => {
    return typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
};

export const createAuthAxiosInstance = () => {
    const token = getAccessToken();
    return axios.create({
        baseURL: "https://dummyjson.com",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });
};