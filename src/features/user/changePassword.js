import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"

const changeUserPassword = async newChangedPassword => {
    let url = `${BASE_URL}${ENDPOINT.CHANGE_PASSWORD}`
    return await getApiResponse(url, true, HTTP_ENUM.PUT, newChangedPassword)
}

export const useChangeUserPassword = () => {
    return useMutation(changeUserPassword)
}