import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "https://anapioficeandfire.com/api";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
