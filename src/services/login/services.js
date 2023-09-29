import axios from "../../lib/axios";
import { API_ENDPOINTS } from "../../utils/APIEndpoints";
import { axiosPrivate } from "../../utils/axiosPrivate";


export const loginUser = async (payload) => {
    return await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.METHOD}${API_ENDPOINTS.LOGIN}?usr=${payload.usr}&pwd=${payload.pwd}`, payload);
};