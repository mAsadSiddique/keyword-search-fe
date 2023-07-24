import { useMutation } from "react-query"
import { BASE_URL } from "src/config"
import { ENDPOINT } from "src/constants/ENDPOINT"
import { HTTP_ENUM, getApiResponse } from "src/utils/axiosFunc"

const fetchKeywordPlanner = async (payload) => {
    let url = `${BASE_URL}${ENDPOINT.KEYWORD_FETCH}`
    return await getApiResponse(url, true, HTTP_ENUM.POST, payload)
}

export const useFetchKeyword = () => {
    return useMutation(fetchKeywordPlanner)
}