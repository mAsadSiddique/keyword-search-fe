import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"

const forgetPassword = async email => {
    let url = `${BASE_URL}${ENDPOINT.FORGET_PASSWORD}`
    return await getApiResponse(url, false, HTTP_ENUM.POST, email)
}

export const useForgetPassword = () => {
    return useMutation(forgetPassword)
}