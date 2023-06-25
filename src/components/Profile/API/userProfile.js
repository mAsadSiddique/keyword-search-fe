import { useQuery } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"
import { onError } from "src/utils/func"


const userProfile = async () => {
    let url = `${BASE_URL}${ENDPOINT.USER_PROFILE}`
    return await getApiResponse(url, true, HTTP_ENUM.GET,)
}

export const useUserProfile = () => {
    return useQuery('profile', userProfile, { onError })
}