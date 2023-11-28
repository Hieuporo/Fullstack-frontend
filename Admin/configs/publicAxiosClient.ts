import axios, { AxiosInstance } from "axios";
import https from "https";
const agent = new https.Agent({
  rejectUnauthorized: false,
});
export const publicAxiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
});

export default publicAxiosClient;
