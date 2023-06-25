import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"

const registerUser = async () => {
    let url = `${BASE_URL}${ENDPOINT.USER_PROFILE}`
    return await getApiResponse(url, false, HTTP_ENUM.POST)
}

export const useRegisterUser = () => {
    return useMutation(registerUser)
}