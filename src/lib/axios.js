import axios from "axios";
import { API_ENDPOINTS } from "../utils/APIEndpoints";

export default axios.create({
    baseURL: API_ENDPOINTS.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})