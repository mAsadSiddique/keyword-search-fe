import axios from "axios";

export const HTTP_ENUM = Object.freeze({
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
});

// Interceptor for every Api Response
axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        // Auto logout when status is unathuorized.
        if (error.response?.status === 401) {
            localStorage.clear();
            setTimeout(() => {
                window.location.pathname = "/";
            }, 1500);
        }
        return Promise.reject(error);
    }
);

export const getApiResponse = async (url, isAuth, method, data, isFormData,) => {
    const jwt = isAuth ? localStorage.getItem("token") : "";

    const headersPayload = { Authorization: `${jwt}` };
    if (isFormData) {
        headersPayload["content-type"] = "multipart/form-data";
    }
    const result = await axios({
        url,
        data,
        headers: jwt ? headersPayload : {},
        method,
    });

    // console.log("API RESPONSE RESULT: ", result);
    return result.data;
};
