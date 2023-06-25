import { toast } from "react-toastify";

export const getShotName = (name) => {

    return name.slice(0, 5) + "----" + name.slice(-7)
}

const getErrorMessage = (error) => {
    // console.log("error: ", error)
    return typeof error?.message === 'string' ? error?.message : error?.message[0]
}

export const onError = (error) => {
    if (error && error.response && error.response.data) {
        toast.error(getErrorMessage(error.response.data));
    }
}