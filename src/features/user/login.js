import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"

const loginUser = async user => {
    let url = `${BASE_URL}${ENDPOINT.LOGIN}`
    return await getApiResponse(url, false, HTTP_ENUM.POST, user)
}

export const useLogin = () => {
    return useMutation(loginUser)
}