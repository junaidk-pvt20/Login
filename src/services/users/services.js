import { API_ENDPOINTS } from "../../utils/APIEndpoints"
import axiosPrivate from "../../utils/axiosPrivate"
import { API_STATUS } from "../../utils/constants"

export const getUsers = async () => {
    try {
        const res = await axiosPrivate.get(`${API_ENDPOINTS.METHOD}${API_ENDPOINTS.USERS}`)
        console.log('res', res)
        if (res?.data?.message?.status === "success") {
            return {
                status: API_STATUS.SUCCESS,
                data: res?.data?.message?.data
            }
        }
    } catch (error) {
        console.log('error', error)
    }
}

export const getUserDetails = async (params) => {

    try {
        const res = await axiosPrivate.get(`${API_ENDPOINTS.SINGLE_USERS}${params}`)
        if (res?.status === 200) {
            return {
                status: API_STATUS.SUCCESS,
                data: res?.data?.data
            }
        }
    } catch (error) {
        console.log('error', error)
    }
}