import { useLocation } from "react-router-dom";

export const useGetJwtFromQuery = () => {
    return new URLSearchParams(useLocation().search);
};
