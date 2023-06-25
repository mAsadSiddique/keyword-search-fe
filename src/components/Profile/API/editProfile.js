import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"


const editProfile = async user => {
    let url = `${BASE_URL}${ENDPOINT.USER_PROFILE}`
    return await getApiResponse(url, true, HTTP_ENUM.PUT, user)
}

export const useEditProfile = () => {
    return useMutation(editProfile)
}