import { useMediaQuery, useTheme } from "@mui/material";

export const useGetScreenBreakPointDown = (breakPoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakPoint));
}


export const useGetScreenBreakPointUp = (breakPoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(breakPoint));
}